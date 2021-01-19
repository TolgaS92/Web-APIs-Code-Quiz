//Timer setup
const timeEl = document.querySelector(".time");
var startButton = document.querySelector(".start");

var secondsLeft = 60;
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left till last answer.";

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            console.log("Time is up!");
            clearInterval(timerInterval);
            if (done === false) {
                done = true;
                finishGame();
            }
        }

    }, 1000);
}

// Quiz questions
var myQuest = [
    {
        question: "1. Which is the different data types present below is not in javascript?",
        answers: "A)String \r\n\r\n B)Number \r\n\r\n C)Array \r\n\r\n D)Boolean",
        correctAnswer: "C)Array",
    },
    {
        question: "2. Which type of JavaScript language is ___",
        answers: "A)Object-Oriented \r\n\r\n B)Object-Based \r\n\r\n C)Assembly-language \r\n\r\n D)High-level",
        correctAnswer: "B)Object-Based",
    },
    {
        question: "3. The 'function' and 'var' are known as:",
        answers: "A)Keywords \r\n\r\n B)Data types \r\n\r\n C)Declaration statements \r\n\r\n D)Prototypes",
        correctAnswer: "C)Declaration statements",
    },
    {
        question: "4. Which one of the following is the correct way for calling the JavaScript code?",
        answers: "A)Preprocessor \r\n\r\n B)Triggering Event \r\n\r\n C)RMI \r\n\r\n D)Function/Method",
        correctAnswer: "D)Function/Method",
    },
    {
        question: "5. Which of the following number object function returns the value of the number?",
        answers: "A)toString() \r\n\r\n B)valueOf() \r\n\r\n C)toLocaleString() \r\n\r\n D)toPrecision()",
        correctAnswer: "B)valueOf()",
    },
    {
        question: "6. What is the basic purpose of the 'toLocateString()' method?",
        answers: "A)It returns a localised object representation \r\n\r\n B)It returns a localized string representation of the object \r\n\r\n C)It return a local time in the string format \r\n\r\n D)It return a parsed string",
        correctAnswer: "B)It returns a localized string representation of the object",
    },
];


function questions(k) {
    console.log(k);
}


function startGame() {
    setTime();
    questions(myQuest);
}


startButton.addEventListener("click", function () {
    setTime();
    document.getElementById("toggle").style.visibility = "hidden";
});
