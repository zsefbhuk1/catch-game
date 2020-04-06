var a = "Catch Game";
var score = 0;
document.getElementById("1").innerHTML = a;
document.getElementById("game").style.visibility = "hidden";
document.onkeydown = function(e) {
  switch (e.key) {
    case "ArrowUp":
      break;
    case "ArrowDown":
      break;
    case "ArrowLeft":
      // left arrow
      break;
    case "ArrowRight":
      // right arrow
      break;
  }
};
function play() {
  a = "Score:" + score;
  document.getElementById("1").innerHTML = a;
  document.getElementById("play").style.visibility = "hidden";
  document.getElementById("game").style.visibility = "visible";
}
