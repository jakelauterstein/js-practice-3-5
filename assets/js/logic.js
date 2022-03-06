var startButton = document.getElementById("buttonEl");

var quizTime = document.getElementById("secondsLeft");

function decrement() {
    quizTime--;
    
};
var startTimer = setInterval(decrement, 1000);




//add event handler for start button click
startButton.addEventListener ("click", startTimer);