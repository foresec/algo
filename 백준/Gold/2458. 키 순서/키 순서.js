const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./2458.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const adjArr = Array(N + 1)
  .fill()
  .map(() => Array(N + 1).fill(Infinity));

for (let i = 1; i <= N; i++) {
  adjArr[i][i] = 0;
}

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  adjArr[a][b] = 0;
}

for (let k = 1; k <= N; k++) {
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      adjArr[i][j] = Math.min(adjArr[i][k] + adjArr[k][j], adjArr[i][j]);
    }
  }
}

let ans = 0;
for (let i = 1; i <= N; i++) {
  let cnt = 0;
  for (let j = 1; j <= N; j++) {
    // 연결된 부분이 있다면 체크
    if (adjArr[i][j] !== Infinity || adjArr[j][i] !== Infinity) {
      cnt++;
    }
  }
  if (cnt === N) ans++;
}

console.log(ans);
