var numSquares = 6;
var colors = [];
var pickedColor;
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var messageDisplay = document.querySelector("#message");
var colorDisplay = document.getElementById('colorDisplay');
var squares = document.querySelectorAll(".square");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected")
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      messageDisplay.textContent = "";
      reset();
    })
  }
}

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    //event listeners
    squares[i].addEventListener("click", function() {
      // grab color of picked square, then compare with picked color
      var clickedColor = this.style.background;
      if (clickedColor === pickedColor) {
        changeColors(clickedColor);
        h1.style.background = clickedColor;
        resetBtn.textContent = "Play again?";
        messageDisplay.textContent = "Correct!";
      } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    })
  }
}

function reset() {
  h1.style.background = "steelblue";
  resetBtn.textContent = "new colors";
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
}

resetBtn.addEventListener("click", function() {
  messageDisplay.textContent = "";
  reset();
})

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

function pickColor() {
  var color = Math.floor(Math.random() * colors.length);
  return colors[color];
}

function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
