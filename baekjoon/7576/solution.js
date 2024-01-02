// [문제 링크]: https://www.acmicpc.net/problem/7576

const fs = require("fs");
​
const filePath = process.platform === "linux" ? "/dev/stdin" : "./7576.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
​
const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];
​
function bfs(tom) {
  const q = [...tom];
    let head = 0
  while (q.length > head) {
        // shift가 시간초과의 문제였음 
    const [x, y] = q[head];
​
    for (let d = 0; d < 4; d++) {
      const nx = x + dx[d];
      const ny = y + dy[d];
​
      if (!(0 <= nx && nx < N && 0 <= ny && ny < M)) {
        continue;
      }
​
      // 안익은 토마토일 때 1씩 더해감
      if (arr[nx][ny] === 0) {
        q.push([nx, ny]);
        arr[nx][ny] = arr[x][y] + 1;
      }
    }
        head++
  }
}
​
const [M, N] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((line) => line.split(" ").map(Number));
​
let ans = 0;
​
const tomato = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (arr[i][j] === 1) {
      tomato.push([i, j]);
    }
  }
}
​
bfs(tomato);
​
​
// 안익은 토마토가 남아있는지 확인
if (arr.some(row => row.includes(0))) {
    console.log(-1);
    process.exit(0);
}
ans = Math.max(...arr.map((row) => Math.max(...row))) - 1;
console.log(ans);
​
​