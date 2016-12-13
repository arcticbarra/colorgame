var colorDisplay = document.getElementById('colorDisplay');
var numSquares = 6;
var messageDisplay = document.querySelector("#message");
var colors = generateRandomColors(numSquares);
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
var squares = document.querySelectorAll(".square");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");


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
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  })
}

easyBtn.addEventListener("click", function() {
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
})

hardBtn.addEventListener("click", function() {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";
  }
})

resetBtn.addEventListener("click", function() {
  messageDisplay.textContent = "";
  h1.style.background = "#232323";
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
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
