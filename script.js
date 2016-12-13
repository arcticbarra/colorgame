var colorDisplay = document.getElementById('colorDisplay');
var numSquares = 6;
var messageDisplay = document.querySelector("#message");
var colors = generateRandomColors(numSquares);
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
var squares = document.querySelectorAll(".square");
var modeButtons = document.querySelectorAll(".mode");

for (var i = 0; i < modeButtons.length; i++) {
  modeButtons[i].addEventListener("click", function() {
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected")
    this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
    reset();
  })
}

function reset() {
  h1.style.background = "steelblue";
  resetBtn.textContent = "new colors";
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
}

for (var i = 0; i < squares.length; i++) {
  // initial colors
  squares[i].style.background = colors[i];

  //event listeners
  squares[i].addEventListener("click", function() {
    // grab color of picked square, then compare with picked color
    var clickedColor = this.style.background;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
      h1.style.background = clickedColor;
      resetBtn.textContent = "Play again?";
      messageDisplay.textContent = "";
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  })
}

resetBtn.addEventListener("click", function() {
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
