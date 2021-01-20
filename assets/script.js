//**Start button setup */
const startButton = document.querySelector(".start");

//Timer setup
var secondsLeft = 60;
function setTime() {
    // Sets interval in variable
    const timeEl = document.querySelector(".time");
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left till last answer.";

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            console.log("Time is up!");
            clearInterval(timerInterval);
        }
        else return secondsLeft;
    }, 1000);
}

// Quiz questions
const myQuest = [
    {
        question: "1. Which is the different data types present below is not in javascript?",
        answers: ["A)String", "B)Number", "C)Array", "D)Boolean"],
        correctAnswer: "C)Array",
    },
    {
        question: "2. Which type of JavaScript language is ___",
        answers: ["A)Object-Oriented", "B)Object-Based", "C)Assembly-language", "D)High-level"],
        correctAnswer: "B)Object-Based",
    },
    {
        question: "3. The 'function' and 'var' are known as:",
        answers: ["A)Keywords", "B)Data types", "C)Declaration statements", "D)Prototypes"],
        correctAnswer: "C)Declaration statements",
    },
    {
        question: "4. Which one of the following is the correct way for calling the JavaScript code?",
        answers: ["A)Preprocessor", " B)Triggering Event", "C)RMI", "D)Function/Method"],
        correctAnswer: "D)Function/Method",
    },
    {
        question: "5. Which of the following number object function returns the value of the number?",
        answers: ["A)toString()", "B)valueOf()", "C)toLocaleString()", "D)toPrecision()"],
        correctAnswer: "B)valueOf()",
    },
    {
        question: "6. What is the basic purpose of the 'toLocateString()' method?",
        answers: ["A)It returns a localised object representation", "B)It returns a localized string representation of the object", "C)It return a local time in the string format", "D)It return a parsed string"],
        correctAnswer: "B)It returns a localized string representation of the object",
    },
];


//**Question and answer spawns */
var k = 0;
function questions() {

    console.log("start");
    document.querySelector(".questionAnswer").innerHTML = "";
    startButton.setAttribute("style", "display: none");
    document.querySelector(".questionAnswer").setAttribute("style", "display: block");
    var que = myQuest[k].question;
    var queEl = document.createElement("h3");
    var ans = myQuest[k].answers;
    queEl.textContent = que;
    document.querySelector(".questionAnswer").appendChild(queEl)

    for (var i = 0; i < ans.length; i++) {
        var answerButton = document.createElement("button");
        answerButton.textContent = ans[i];
        document.querySelector(".questionAnswer").appendChild(answerButton);
        answerButton.addEventListener("click", answerCheck);
    }
}
//**Answer Check */
function answerCheck(event) {
    console.log("answer check");
    if (myQuest[k].correctAnswer !== event.target.textContent) {
        secondsLeft;
    } else { }
    if (k < myQuest.length - 1) {
        k++;
        questions();
    } else finishGame();
}

//** Score calculate*/
var submitForm = document.querySelector("#submit");
var highestScore = document.querySelector("#hiScores");
var score = 0
var interval;
function finishGame() {
    console.log("Finish Game")
    clearInterval(interval);
    score = secondsLeft;
    document.querySelector(".questionAnswer").setAttribute("style", "display: none");
    document.querySelector("#highscore").textContent = "Final Score " + score;
    document.querySelector("#playerName").setAttribute("style", "display: block");
}

//** Score storage function */
function savedScores(event) {
    event.preventDefault();
    var userName = document.querySelector("#username").value.trim();
    var finalScore = {
        score: score,
        name: userName
    };
    var input = document.getElementById("playerName")
    var highScores = JSON.parse(window.localStorage.getItem("high_score")) || [];
    highScores.push(finalScore);
    window.localStorage.setItem("high_score", JSON.stringify(highScores));

    input.setAttribute("style", "display: block");
}
//**High scores display */
function checkHighScores() {
    var highScores = JSON.parse(window.localStorage.getItem("high_score")) || [];
    document.querySelector(".result").setAttribute("style", "display: block");
    highScores.forEach(function (score) {
        var paraTag = document.createElement("p");
        paraTag.textContent = score.name + " " + score.score;
        document.querySelector(".result").appendChild(paraTag);
    });
}

//**Start button hidden */
startButton.addEventListener("click", function () {
    document.getElementById("toggle").style.visibility = "hidden";
});
//**When click start button question comes up */
startButton.addEventListener("click", function () {
    const showButton = document.querySelector("#showButton");
    document.getElementById("showButton").className = "btn-group d-block";
});

var viewHighScores = document.querySelector("#highScores");

viewHighScores.addEventListener("click", function () {
    document.querySelector(".resultMain").setAttribute("style", "display: none");
    document.querySelector("#resultView")
});
//**Run The game */
startButton.addEventListener("click", questions)
startButton.addEventListener("click", setTime)
submitForm.addEventListener("submit", savedScores)
highestScore.addEventListener("click", checkHighScores)
