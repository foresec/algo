// 두 문자열에 포함된 가장 긴 공통 부분 문자열
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./5582.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const s1 = input[0];
const s2 = input[1];

const dp = Array(s1.length+1)
  .fill()
  .map(() => Array(s2.length+1).fill(0));

let maxVal = 0;
for (let i = 1; i <= s1.length; i++) {
  for (let j = 1; j <= s2.length; j++) {
    if (s1[i - 1] === s2[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
      maxVal = Math.max(maxVal, dp[i][j]);
    }
  }
}

console.log(maxVal)
