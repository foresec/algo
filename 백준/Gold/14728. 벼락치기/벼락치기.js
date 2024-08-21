const filePath = process.platform === "linux" ? "/dev/stdin" : "./14728.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, T] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((l) => l.split(" ").map(Number));

const dp = Array(10001).fill(0);

for (let i = 0; i < N; i++) {
  const [K, S] = arr[i];
  
  for (let t = T; t >= K; t--) {
    dp[t] = Math.max(dp[t], dp[t - K] + S);
  }
}

console.log(dp[T]);
