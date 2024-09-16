function bfs(a, b, c) {
  let q = [[a, b, c]];
  visited[a][b] = true;

  while (q.length) {
    let [a, b, c] = q.shift();

    if (a === 0) {
      cntSet.add(c);
    }

    let waterMove = [
      [Math.max(a - (B - b), 0), Math.min(B, a + b), c],
      [Math.max(a - (C - c), 0), b, Math.min(C, a + c)],
      [Math.min(A, a + b), Math.max(b - (A - a), 0), c],
      [a, Math.max(b - (C - c), 0), Math.min(C, b + c)],
      [Math.min(A, a + c), b, Math.max(c - (A - a), 0)],
      [a, Math.min(B, b + c), Math.max(c - (B - b), 0)],
    ];

    for (let [na, nb, nc] of waterMove) {
      if (!visited[na][nb]) {
        visited[na][nb] = true;
        q.push([na, nb, nc]);
      }
    }
  }
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "./2251.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const A = parseInt(input[0]);
const B = parseInt(input[1]);
const C = parseInt(input[2]);

const visited = Array(201)
  .fill()
  .map(() => Array(201).fill(false));

const cntSet = new Set();

bfs(0, 0, C);

let answer = Array(...cntSet).sort((a, b) => a - b);
console.log(answer.join(" "));
