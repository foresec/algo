// 0: 들판, 1: 나무, 2: 돌
// 가장 큰 정사각형 목장의 한 변의 크기 구하기
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./14925.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [M, N] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((l) => l.split(" ").map(Number));

const dp = Array(M)
  .fill()
  .map(() => Array(N).fill(0));

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (arr[i][j] === 0) {
      if (i === 0 || j === 0) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
      }
    } else {
      dp[i][j] = 0;
    }
  }
}

console.log(Math.max(...dp.map((row) => Math.max(...row))));
