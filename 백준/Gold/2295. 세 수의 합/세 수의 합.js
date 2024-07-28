const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./2295.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);

const arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(parseInt(input[i].trim()));
}
arr.sort((a, b) => a - b);

let ans = 0;

// 두 수의 합 경우의수 Set저장
const twoSums = new Set();

for (let i = 0; i < N; i++) {
  for (let j = i; j < N; j++) {
    twoSums.add(arr[i] + arr[j]);
  }
}

// 3번째 수를 찾음 
for (let i = N - 1; i >= 0; i--) {
  for (let j = 0; j < i; j++) {
    if (twoSums.has(arr[i] - arr[j])) {
      ans = Math.max(ans, arr[i]);
    }
  }
}

console.log(ans);
