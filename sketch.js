function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function openWin() {
    myWindow = window.open("", "", "width=100, height=100");
  }
  
  function resizeWin() {
    myWindow.resizeBy(250, 250);
  }