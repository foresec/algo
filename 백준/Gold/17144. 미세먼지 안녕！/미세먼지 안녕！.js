const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

function rotateUpside(R, C, x, y) {
  if (x === R && y < C - 1) {
    y++;
  } else if (x !== 0 && y == C - 1) {
    x--;
  } else if (x === 0 && y > 0) {
    y--;
  } else if (x < R && y === 0) {
    x++;
  }

  return [x, y];
}

function rotateDownside(minX, R, C, x, y) {
  if (x == minX && y < C - 1) {
    y++;
  } else if (x < R - 1 && y == C - 1) {
    x++;
  } else if (x === R - 1 && y > 0) {
    y--;
  } else if (x !== minX && y === 0) {
    x--;
  }

  return [x, y];
}

function moveDust(R, C, arr, base) {
  // 작동 시 1칸씩 이동, 공기청정기로 들어간 미세먼지는 정화됨
  const movedArr = Array.from({ length: R }, () =>
    Array.from({ length: C }, () => 0)
  );

  const [up, down] = base;

  // 위쪽(반시계)
  for (let i = up[0]; i >= 0; i--) {
    for (let j = 0; j < C; j++) {
      if (arr[i][j] > 0) {
        let [newX, newY] = rotateUpside(up[0], C, i, j);
        if (newX === up[0] && newY == up[1]) continue;
        movedArr[newX][newY] = arr[i][j];
      }
    }
  }
  // 아래쪽(시계)
  for (let i = down[0]; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (arr[i][j] > 0) {
        let [newX, newY] = rotateDownside(down[0], R, C, i, j);
        if (newX === down[0] && newY == down[1]) continue;
        movedArr[newX][newY] = arr[i][j];
      }
    }
  }

  movedArr[up[0]][up[1]] = -1;
  movedArr[down[0]][down[1]] = -1;

  return movedArr;
}

function diffusion(R, C, arr, base) {
  // 5분의 1의 양만큼 4방향으로 확산하며 남은 양은 기존양 - 확산된 양 * 방향갯수
  // (칸 or 공기청정기일 경우 X)

  const diffusedArr = Array.from({ length: R }, () =>
    Array.from({ length: C }, () => 0)
  );

  const [up, down] = base;

  for (let x = 0; x < R; x++) {
    for (let y = 0; y < C; y++) {
      if (arr[x][y] > 0) {
        let dirCnt = 0;
        let val = Math.floor(arr[x][y] / 5);

        for (let d = 0; d < 4; d++) {
          let nx = x + dx[d];
          let ny = y + dy[d];

          if (nx < 0 || nx >= R || ny < 0 || ny >= C) continue;

          if (arr[nx][ny] === -1) continue;

          // 먼지 퍼짐
          diffusedArr[nx][ny] += val;
          dirCnt += 1;
        }
        // 기존값 업데이트
        if (dirCnt > 0) {
          diffusedArr[x][y] += arr[x][y] - dirCnt * val;
        }
      }
    }
  }

  diffusedArr[up[0]][up[1]] = -1;
  diffusedArr[down[0]][down[1]] = -1;

  return diffusedArr;
}

// T초 후 방에 남아있는 미세먼지의 양
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./17144.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [R, C, T] = input[0].split(" ").map(Number);

let arr = [];
let airCleaner = [];

for (let i = 1; i <= R; i++) {
  let row = input[i].split(" ").map((val, j) => {
    let num = Number(val);
    if (num === -1) {
      airCleaner.push([i - 1, j]);
    }
    return num;
  });

  arr.push(row);
}

let currentArr = arr

for (let t = 0; t < T; t++) {
  // 1. 미세먼지 확산(한번에 일어남)
	currentArr = diffusion(R, C, currentArr, airCleaner);
  // 2. 공기청정기 이동 및 회수
  currentArr = moveDust(R, C, currentArr, airCleaner);
}

let ans = 0;
for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (currentArr[i][j] > 0) {
      ans += currentArr[i][j];
    }
  }
}

console.log(ans);
