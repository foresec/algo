const filePath = process.platform === "linux" ? "/dev/stdin" : "./14728.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, T] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((line) => line.split(" ").map(Number));

const dp = Array(N + 1)
  .fill(0)
  .map(() => Array(10001).fill(0));

for (let n = 1; n <= N; n++) {
  const [K, S] = arr[n - 1];

  for (let t = 0; t <= T; t++) {
    // 공부해야하는 시간이 더 크면 이전값업데이트만
    if (K > t) {
      dp[n][t] = dp[n - 1][t];
    } else {
      // 현재 단원공부를 선택ㅇ/선택x 중 최대 점수
      dp[n][t] = Math.max(dp[n - 1][t], dp[n - 1][t - K] + S);
    }
  }
}
console.log(dp[N][T]);
