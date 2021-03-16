resetTrain();
var animation;

var train = document.getElementById("train");
train.addEventListener("click", speedUp);

var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

function speedUp() {
    if (trainPosition == 260) {
        resetTrain();
        train.style.left = trainPosition + 'px';
    } else {
        animate();
    }
}

function checkPosition(currentPosition) {
    if (currentPosition > 259) {
        alert("Crash!");
        console.log("Crash!");
        clearInterval(animation);

    }
}

function stopTrain() {
    if (trainPosition < 260) {
        clearInterval(animation);
        console.log("Whew! That was close!");
    }
}

function resetTrain() {
    trainSpeed = 250;
    trainPosition = 0;
}

function animate() {
    if (trainSpeed > 10) {
        trainSpeed -= 10;
    }
    console.log("train speed: " + trainSpeed);

    clearInterval(animation);
    animation = setInterval(frame, trainSpeed);
}

function frame() {
    trainPosition += 2;
    train.style.left = trainPosition + 'px';
    console.log(trainPosition);
    checkPosition(trainPosition);
}