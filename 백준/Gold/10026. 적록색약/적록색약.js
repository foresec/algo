const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

function bfs(i, j, alpha, visited) {
  const q = [[i, j]];
  visited[i][j] = true;

  while (q.length > 0) {
    let [x, y] = q.shift();
    for (let d = 0; d < 4; d++) {
      let nx = x + dx[d];
      let ny = y + dy[d];

      if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;

      if (!visited[nx][ny] && arr[nx][ny] === alpha) {
        visited[nx][ny] = true;
        q.push([nx, ny]);
      }
    }
  }
}

// 적록색약이 아닌 사람이 봤을때와 적록색약인 사람이 봤을때 구역의 수
// 적록색약은 R=G
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./10026.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const arr = input.slice(1).map((l) => l.trim().split(""));

const visited = Array.from({ length: N }, () => new Array(N).fill(false));
const rgVisited = Array.from({ length: N }, () => new Array(N).fill(false));

let blueCnt = 0;
let redCnt = 0;
let greenCnt = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (visited[i][j]) continue;

    if (arr[i][j] === "B") {
      blueCnt++;
      bfs(i, j, "B", visited);
    } else if (arr[i][j] === "G") {
      greenCnt++;
      bfs(i, j, "G", visited);
    } else {
      redCnt++;
      bfs(i, j, "R", visited);
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (arr[i][j] === "G") {
      arr[i][j] = "R";
    }
  }
}

let rgCnt = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (rgVisited[i][j]) continue;
    if (arr[i][j] === "R") {
      rgCnt++;
      bfs(i, j, "R", rgVisited);
    }
  }
}

console.log(blueCnt + redCnt + greenCnt, rgCnt + blueCnt);
