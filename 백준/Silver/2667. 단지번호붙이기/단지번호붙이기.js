const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

function checkHome(i, j, visited, arr) {
  let cnt = 1;
  const q = [[i, j]];
  visited[i][j] = true;

  while (q.length > 0) {
    let [x, y] = q.shift();

    for (let d = 0; d < 4; d++) {
      let nx = x + dx[d];
      let ny = y + dy[d];
      if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;

      if (!visited[nx][ny] && arr[nx][ny]) {
        q.push([nx, ny]);
        visited[nx][ny] = true;
        cnt += 1;
      }
    }
  }
  return cnt;
}

// 단지 수 출력하고, 각 단지에 속하는 집의 수 오름차순 정렬 출력
const filePath = process.platform === "linux" ? "/dev/stdin" : "./2667.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const arr = input.slice(1).map((l) => l.split("").map(Number));
let cnt = 0;
let ans = [];

const visited = Array(N)
  .fill()
  .map(() => Array(N).fill(false));
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (arr[i][j] && !visited[i][j]) {
      ans.push(checkHome(i, j, visited, arr));
      cnt++;
    }
  }
}
console.log(cnt);
ans.sort((a, b) => a - b);
ans.forEach((c) => console.log(c));
