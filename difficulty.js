// difficulty.js

function setDifficulty(difficulty) {
  switch (difficulty) {
    case 'easy':
      paddle.width = 300; // 球拍寬度更大
      circle.xSpeed = 20; // 球的速度較慢
      circle.ySpeed = 20;
      break;
    case 'medium':
      paddle.width = 200; // 中等大小的球拍
      circle.xSpeed = 25; // 中等速度的球
      circle.ySpeed = 25;
      break;
    case 'hard':
      paddle.width = 100; // 球拍寬度最小
      circle.xSpeed = 30; // 球的速度最快
      circle.ySpeed = 30;
      break;
    default:
      // 預設為中等難度
      paddle.width = 200;
      circle.xSpeed = 15;
      circle.ySpeed = 15;
  }


  // 如果遊戲已經暫停或結束，重新開始遊戲
  if (isPaused || game === null) {
    location.reload(); // 假設有一個函數可以重啟遊戲
  }
}
