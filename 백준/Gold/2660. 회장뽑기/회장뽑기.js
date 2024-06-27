// 회장(회원 중 최소점수)의 점수와 회장이될수 있는 모든 사람을 찾기
// 제일 짧은 거리로 이어진 경우가 회장인듯

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./2660.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
let temp = input.slice(1, -1);

let adj = Array.from({ length: N }, () => Array(N).fill(Infinity));

for (let i = 0; i < temp.length; i++) {
  const [s, e] = temp[i].split(" ").map(Number);
  adj[s - 1][e - 1] = 1;
  adj[e - 1][s - 1] = 1;
}

for (let k = 0; k < N; k++) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      adj[i][j] = Math.min(adj[i][j], adj[i][k] + adj[k][j]);
    }
  }
  adj[k][k] = 0;
}

const maxScores = adj.map((person) => Math.max(...person));

let minScore = Math.min(...maxScores);

const candidates = [];
maxScores.forEach((score, idx) => {
  if (score === minScore) {
    candidates.push(idx + 1); 
  }
});

console.log(`${minScore} ${candidates.length}`);
console.log(candidates.join(" "));
