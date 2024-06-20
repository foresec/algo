const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

function cleaning(arr, N, M, x, y, rd) {
  let cnt = 0;

  while (true) {
    if (arr[x][y] === 0) {
      arr[x][y] = 2;
      cnt += 1;
    }

    // 현재 자리에서 주변 탐색
    let checkZero = false;
    for (let d = 0; d < 4; d++) {
      // (important) 찾을 때까지 계속 돌아가야 함
      rd = (rd + 3) % 4;
      let nx = x + dx[rd];
      let ny = y + dy[rd];

      if (nx < 0 && ny < 0 && nx >= N && ny >= M) continue;
      // 청소되지 않은 빈 칸이 있는 경우
      if (arr[nx][ny] === 0) {
        x = nx
				y = ny
        checkZero = true;
        break;
      }
    }

    // 현재 칸의 주변 4칸 중 청소되지 않은 빈 칸이 없는 경우
    // (여기서 작동 멈춤이 일어날 수 있음)
    if (!checkZero) {
      let back = (rd + 2) % 4;
      let nx = x + dx[back];
      let ny = y + dy[back];

      if (nx >= 0 && ny >= 0 && nx < N && ny < M) {
        if (arr[nx][ny] !== 1) {
          x = nx
					y = ny
        } else {
          return cnt;
        }
      } else {
        return cnt;
      }
    }
  }
}

// 로봇 청소기가 작동을 시작한 후 작동을 멈출 때까지 청소하는 칸의 개수
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./14503.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const [r, c, d] = input[1].split(" ").map(Number);
const arr = [];
let answer = 0;

for (let i = 2; i < N + 2; i++) {
  arr.push(input[i].split(" ").map(Number));
}

answer = cleaning(arr, N, M, r, c, d);

console.log(answer);
