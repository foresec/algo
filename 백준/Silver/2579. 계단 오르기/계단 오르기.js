// 밟을때 점수를 얻는데, 얻을 수 있는 총점수의 최댓값
const filePath = process.platform === "linux" ? "/dev/stdin" : "./2579.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const arr = input.slice(1).map(Number);
const dp = new Array(N).fill(0);

if (N === 1) {
  console.log(arr[0]);
} else if (N === 2) {
  console.log(arr[1] + arr[0]);
} else {
  dp[0] = arr[0];
  dp[1] = arr[1] + arr[0];
  dp[2] = Math.max(arr[2] + arr[0], arr[2] + arr[1]);

  for (let i = 3; i < N; i++) {
    // 두칸 전이거나, 한칸+두칸전인경우
    dp[i] = arr[i] + Math.max(dp[i - 2], arr[i - 1] + dp[i - 3]);
  }
  console.log(dp[N - 1]);
}
