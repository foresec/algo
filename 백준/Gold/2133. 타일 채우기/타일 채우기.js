// 남은 공간이 있으면 안됨
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./2133.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const dp = Array(N + 1).fill(0);

dp[0] = 1;
dp[2] = 3;

if (N % 2 === 1) {
  console.log(0);
  process.exit(0);
}

for (let i = 4; i <= N; i += 2) {
  dp[i] = dp[i - 2] * 3;

  for (let j = 4; j <= i; j += 2) {
    dp[i] += dp[i - j] * 2;
  }
}
console.log(dp[N]);
