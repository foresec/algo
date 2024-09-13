const filePath = process.platform === "linux" ? "/dev/stdin" : "./11052.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);

// 인덱스(카드개수당) 최대 금액 저장
const dp = Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= i; j++) {
    // j만큼 전의 카드를 구매했을때 값 + 주어진 j만큼의 값
    let temp = dp[i - j] + arr[j - 1];
    // 비교해서 최대값
    dp[i] = Math.max(dp[i], temp);
  }
}

console.log(dp[N]);
