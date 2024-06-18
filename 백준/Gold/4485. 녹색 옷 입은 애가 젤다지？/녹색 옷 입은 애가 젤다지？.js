const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

function checkRupee(N, arr) {
  const dist = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => Infinity)
  );

  // 초기값
  const q = [[0, 0]];
  dist[0][0] = arr[0][0]


  while (q.length > 0) {
    const [x, y] = q.shift();

    for (let d = 0; d < 4; d++) {
      let nx = x + dx[d];
      let ny = y + dy[d];

      if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue


      if (dist[nx][ny] > dist[x][y] + arr[nx][ny]) {
				dist[nx][ny] = dist[x][y] + arr[nx][ny]
        q.push([nx, ny]);
      }
    }
  }

	return dist[N-1][N-1]
}

// 링크가 이동하면서 얻는 최소 금액?
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./4485.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let idx = 0;
let tcNum = 0

while (idx < input.length) {
  const N = parseInt(input[idx]);
  if (N === 0) break;
  idx++;

  const arr = [];
  for (let i = 0; i < N; i++) {
    const row = input[idx].split(" ").map(Number);
    arr.push(row);
    idx++;
  }

  let answer = checkRupee(N, arr);
	tcNum++
  console.log(`Problem ${tcNum}: ${answer}`)
}
