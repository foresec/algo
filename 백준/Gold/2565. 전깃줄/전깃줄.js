// 전깃줄이 교차하지 않도록 하기위해 없애야하는 전깃줄의 최소갯수
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./2565.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const arr = input.slice(1).map((item) => item.split(" ").map(Number));
// a전봇대 기준 오름차순
arr.sort((a, b) => a[0] - b[0]);
// LCS
const dp = Array(N).fill(1);

for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) { 
		// 연결된 b전봇대의 숫자가 더 작다면(교차하지 않고 연결되었다면) 최대값 업데이트
    if (arr[j][1] < arr[i][1]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}
let ans = N - Math.max(...dp)
console.log(ans)