document.getElementById("lefteye").style.backgroundColor =
    "purple";
// Put yellow dots around his right eye.
document.getElementById("righteye").style.border =
    "4px yellow dotted";
// Change his left arm’s color.
document.getElementById("leftarm").style.backgroundColor =
    "#FF00FF";
// Change the text color.
document.getElementById("body").style.color = "#FF0000";
// Give Douglas hair.
document.getElementById("head").style.borderTop =
    "5px black solid";
//document.getElementById("head").style.transform = "rotate(15deg)";
var rightEye = document.getElementById("righteye");
rightEye.addEventListener("click", moveUpDown);

function moveUpDown(e) {
    var robotPart = e.target;
    var top = 0;
    var id = setInterval(frame, 10) // draw every 10ms
    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 20) {
            clearInterval(id);
        }
    }
}
//moving nose right
var nose = document.getElementById("nose");
nose.addEventListener("click", moveNoseRight);

function moveNoseRight(e) {
    var robotPart = e.target;
    var left = 75;
    var id = setInterval(frame, 10) // draw every 10ms
    function frame() {
        robotPart.style.left = left + '%';
        left--;
        if (left === 50) {
            clearInterval(id);
        }
    }
}