//Timer setup
var timeEl = document.querySelector(".time");

var secondsLeft = 60;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left till answer.";

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
        }

    }, 1000);
}

var startButton = document.querySelector(".start")

startButton.addEventListener("click", function () {
    setTime();
    document.getElementById("toggle").style.visibility = "hidden";
});
// Quiz questions setup
var myQuest = ["Inside which HTML element do we put the JavaScript?", "What is the correct JavaScript syntax to change the content of the HTML element below?<p id='demo'>This is a demonstration.</p>"]

function questions(k) {
    console.log(k);
}
questions(myQuest);