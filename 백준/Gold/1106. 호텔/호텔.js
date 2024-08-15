// 고객을 적어도 C명 늘이기 위해 형택이가 투자해야하는 돈의 최솟값
const filePath = process.platform === "linux" ? "/dev/stdin" : "./1106.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [C, N] = input[0].split(" ").map(Number);
const costs = input.slice(1).map((line) => line.split(" ").map(Number));

// 고객 명수 당 최소 비용 저장 dp
const dp = Array(100000).fill(Infinity);
dp[0] = 0;

for (const [cost, person] of costs) {
  for (let i = 0; i <= C; i++) {
    // i명의 고객 + person만큼 더 확보한 경우의 최소비용 업데이트
    dp[i + person] = Math.min(dp[i + person], dp[i] + cost);
  }
}

let ans = Infinity;
// C(인원 수 최소충족)부터 그 뒤 비용을 탐색하여 최소 비용을 구함
for (let i = C; i < dp.length; i++) {
  ans = Math.min(ans, dp[i]);
}

console.log(ans);
