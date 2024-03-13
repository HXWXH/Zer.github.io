// Countdown Timer
var countdownNumber = 10;
var countdownID;
const startBtn = document.getElementById("startBtn");


function initial() { countdownFunc(); }

function start() {
    countdownFunc();
    startBtn.disabled = true;
}

function pause() {
    clearTimeout(countdownID);
    startBtn.disabled = false;
}

function reset() {
    countdownNumber = 10;
    countdownFunc();
}

function countdownFunc() {

    var x = document.getElementById("countdown");
    x.innerHTML = countdownNumber;

    if (countdownNumber == 0) {

        startBtn.disabled = true;
        // alert("倒數結束");
        clearTimeout(countdownID);

    }else{

        countdownNumber--;

        if (countdownID) {

            clearTimeout(countdownID);

        }

        countdownID = setTimeout(countdownFunc, 1000);

    }
}

// Mouseover hover effect
const container = document.getElementById("container");
const body = document.getElementById("body");

container.addEventListener("mouseover", () => {
    body.style.boxShadow = "inset 0px 180px 80px -200px white";
    body.style.transition = "box-shadow 0.5s";
});

container.addEventListener("mouseout", () => {
    body.style.boxShadow = "inset 0px 0px 0px 0px white";
    body.style.transition = "box-shadow 0.25s ease-in-out";
});