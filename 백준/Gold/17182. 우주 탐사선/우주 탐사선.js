function dfs(current, cnt, total, visited) {
  // 조건보다 크면 미리 리턴
  if (total > ans) return;

  // 조건 충족시 업데이트
  if (cnt === N) {
    ans = Math.min(ans, total);
    return;
  }

  // 백트래킹
  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      dfs(i, cnt + 1, total + arr[current][i], visited);
      visited[i] = false;
    }
  }
}

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./17182.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((line) => line.split(" ").map(Number));

// 플로이드-워셜 최소값 업데이트
for (let k = 0; k < N; k++) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      arr[i][j] = Math.min(arr[i][j], arr[i][k] + arr[k][j]);
    }
  }
}

let ans = Infinity;
const visited = Array(N).fill(false);

// 시작점은 이미 방문
visited[K] = true;
dfs(K, 1, 0, visited);

console.log(ans);
