let gameBoard = document.getElementById("gameBoard");
let height = gameBoard.height;
let width = gameBoard.width;
let ctx = gameBoard.getContext("2d");

// 乒乓球
let circle = {
  x: 200,
  y: 200,
  radius: 20,
  color: "red",
  xSpeed: 20,
  ySpeed: 20,
};

function drawCircle() {
  circle.x += circle.xSpeed;
  circle.y += circle.ySpeed;

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);

  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
  ctx.fillStyle = circle.color;
  ctx.fill();
  ctx.closePath();

  // 碰到邊界反彈
  if (circle.x + circle.radius > width || circle.x - circle.radius < 0) {
    circle.xSpeed *= -1;
  }
  if (circle.y + circle.radius > height || circle.y - circle.radius < 0) {
    circle.ySpeed *= -1;
  }
}

let game = setInterval(drawCircle, 25);
