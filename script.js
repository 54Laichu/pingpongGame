let gameBoard = document.getElementById("gameBoard");
let height = gameBoard.height;
let width = gameBoard.width;
let ctx = gameBoard.getContext("2d");

let isPaused = false;
function togglePause() {
  if (isPaused) {
    // 如果遊戲當前是暫停的，則恢復遊戲
    game = setInterval(drawCircle, 25);
    isPaused = false;
  } else {
    // 如果遊戲正在進行中，則暫停遊戲
    clearInterval(game);
    isPaused = true;
  }
}

// 乒乓球
let circle = {
  x: 200,
  y: 200,
  radius: 20,
  color: "red",
  xSpeed: 20,
  ySpeed: 20,
};

// 球拍
let paddle = {
  x: 200,
  y: height - 30,
  width: 300,
  height: 10,
  color: "white",
};

//  滑鼠控制
document.addEventListener("mousemove", (event) => {
  paddle.x = event.clientX - paddle.width / 2;
  if (paddle.x < 0) {
    paddle.x = 0;
  }
  if (paddle.x > width - paddle.width) {
    paddle.x = width - paddle.width;
  }
})

function drawCircle() {
  circle.x += circle.xSpeed;
  circle.y += circle.ySpeed;

  //畫出遊戲畫面
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);

  //畫出球
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
  ctx.fillStyle = circle.color;
  ctx.fill();
  ctx.closePath();

  //畫出球拍
  ctx.fillStyle = paddle.color;
  ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);

  // 碰到球拍反彈
  if (
    circle.x >= paddle.x - circle.radius &&
    circle.x <= paddle.x + paddle.width + circle.radius &&
    circle.y >= paddle.y - circle.radius &&
    circle.y <= paddle.y + paddle.height + circle.radius
  ) {
    circle.ySpeed *= -1;
  }
  if (circle.y > height) {
    clearInterval(game);
    alert("Game Over");
  }

  // 碰到邊界反彈
  if (circle.x + circle.radius > width || circle.x - circle.radius < 0) {
    circle.xSpeed *= -1;
  }
  if ( circle.y - circle.radius < 0) {
    circle.ySpeed *= -1;
  }

}

let game = setInterval(drawCircle, 25);
