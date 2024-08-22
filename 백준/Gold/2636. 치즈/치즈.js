const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

function bfs(i, j, visited) {
  const q = [[i, j]];
  visited[i][j] = true;

  const current = [];

  while (q.length > 0) {
    const [x, y] = q.pop();

    for (let d = 0; d < 4; d++) {
      let nx = x + dx[d];
      let ny = y + dy[d];

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

      if (arr[nx][ny] && !visited[nx][ny]) {
        current.push([nx, ny]);
        visited[nx][ny] = true;
      } else if (!visited[nx][ny]) {
        q.push([nx, ny]);
        visited[nx][ny] = true;
      }
    }
  }
  return current;
}

// 치즈가 모두 녹아없어지는데 걸리는 시간
// 모두 녹기 1시간 전 남은 치즈조각이 놓여있는 칸의 총개수
const filePath = process.platform === "linux" ? "/dev/stdin" : "./2636.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((l) => l.split(" ").map(Number));
let cnt = 0;
let last = 0;

// 치즈바깥쪽 경계부터 한겹씩 없어짐

while (true) {
  const visited = Array(N)
    .fill()
    .map(() => Array(M).fill(false));

  // 현재 상황에서 외부경계에 맞닿은 치즈 찾기
  let cheeze = bfs(0, 0, visited);

  if (cheeze.length === 0) break;
  last = cheeze.length;

  for (const [x, y] of cheeze) {
    arr[x][y] = 0;
  }

  cnt += 1;
}

console.log(cnt);
console.log(last);
