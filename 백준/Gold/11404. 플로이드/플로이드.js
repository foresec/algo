// 모든 도시의 쌍 (A, B)에 대해서 도시 A에서 B로 가는데 필요한 비용의 최솟값
const filePath = process.platform === "linux" ? "/dev/stdin" : "./11404.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const M = parseInt(input[1]);

const dist = Array(N)
  .fill()
  .map(() => Array(N).fill(Infinity));

for (let i = 0; i < N; i++) {
  dist[i][i] = 0;
}

for (let i = 2; i < M + 2; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);

  dist[a - 1][b - 1] = Math.min(dist[a - 1][b - 1], c);
}

for (let k = 0; k < N; k++) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
    }
  }
}

let ans = dist
  .map((row) => row.map((val) => (val === Infinity ? 0 : val)).join(" "))
  .join("\n");

console.log(ans);
