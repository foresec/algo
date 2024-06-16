// [문제 링크]: https://www.acmicpc.net/problem/2631

// 번호 순서대로 배치하기 위해 옮겨지는 아이의 최소 수
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./2631.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
​
const N = parseInt(input[0]);
const numbers = input.slice(1).map(Number);
​
// LIS (최장 증가 부분 수열) 알고리즘을 활용, dp에 LIS의 최대 길이를 담자
const dp = new Array(N).fill(1);
​
// 각 인덱스에 대해 이전 인덱스의 값들과 비교하며,
// numbers[i]가 numbers[j]보다 큰 경우 dp[i]를 업데이트
// dp[i]는 numbers[i]까지의 LIS 길이
for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (numbers[i] > numbers[j]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}
​
const LISLength = Math.max(...dp);
​
// 전체 길이에서 LIS의 최장 길이를 빼면 최소로 옮겨져야하는 수를 구할 수 있음
let ans = N - LISLength;
​
console.log(ans);
​