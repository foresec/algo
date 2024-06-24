// 퇴사일 전까지 상담을 적절히 해서 얻을 수 있는 최대 수익
// 상담에는 소유되는 일수(T)와 수익이(P) 주어지는데
// 상담은 한번에 하나씩만 되며, 퇴사하는 날짜까지 상담 일수가 이어지면 안됨

function getMaxBenefit(N, arr) {
  const dp = Array.from({ length: N + 1 }, () => 0);

  for (let i = 0; i < N; i++) {
    let [t, p] = arr[i];

    dp[i + 1] = Math.max(dp[i + 1], dp[i]);

    if (i + t <= N) {
      dp[i + t] = Math.max(dp[i] + p, dp[i + t]);
    }
		
  }
  return dp[N];
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./15486.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const arr = input.slice(1).map((num) => num.split(" ").map(Number));

let answer = getMaxBenefit(N, arr);

console.log(answer);
