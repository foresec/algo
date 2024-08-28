// S~E번째까지의 수가 팰린드롬을 이루는지 판단 (1/0)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./10942.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const nums = input[1].split(" ").map(Number);
const M = parseInt(input[2]);

const dp = Array(N + 1)
  .fill()
  .map(() => Array(N + 1).fill(0));

// 길이가 1
for (let i = 0; i < N; i++) {
  dp[i][i] = 1;
}
// 길이가 2
for (let i = 0; i < N - 1; i++) {
  if (nums[i] === nums[i + 1]) {
    dp[i][i + 1] = 1;
  }
}

// 3 이상
for (let len = 3; len <= N; len++) {
  // dp에서 시작점과 끝점을 탐색
  for (let s = 0; s <= N - len; s++) {
    let e = s + len - 1;

    // 시작과 끝이 다르면 continue
    if (nums[s] !== nums[e]) continue;

    // 더 안쪽 값이 1이라면 (12321일때 232)
    if (dp[s + 1][e - 1] === 1) {
      dp[s][e] = 1;
    }
  }
}

let ans = [];
for (let i = 3; i < M + 3; i++) {
  const [S, E] = input[i].split(" ").map(Number);
  ans.push(dp[S - 1][E - 1]);
}
console.log(ans.join("\n"));
