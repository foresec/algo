const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

function bfs(arr, startX, startY, visited) {
  const N = arr.length;
  const M = arr[0].length;

  const q = [[startX, startY]];
  visited[startX][startY] = true;
  let size = 1;

  while (q.length > 0) {
    const [x, y] = q.shift();

    for (let d = 0; d < 4; d++) {
      const nx = x + dx[d];
      const ny = y + dy[d];

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

      if (!visited[nx][ny] && arr[nx][ny] > 0) {
        visited[nx][ny] = true;
        q.push([nx, ny]);
        size++;
      }
    }
  }

  return size;
}

function decreaseIce(arr) {
  const N = arr.length;
  const M = arr[0].length;
  let newArr = arr.map((row) => row.slice());

  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr[0].length; y++) {
      // 얼음이 남아있는 경우에
      if (arr[x][y] > 0) {
        let iceCnt = 0;
        for (let d = 0; d < 4; d++) {
          let nx = x + dx[d];
          let ny = y + dy[d];

          if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

          if (arr[nx][ny] > 0) {
            iceCnt++;
          }
        }
        // 3개보다 적으면 newArr의 얼음을 줄임
        if (iceCnt < 3) {
          newArr[x][y]--;
        }
      }
    }
  }

  return newArr;
}

function rotate(x, y, arr, newArr, L) {
  const size = 2 ** L;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      newArr[x + j][y + size - 1 - i] = arr[x + i][y + j];
    }
  }

  return newArr;
}

function fireStorm(L, arr) {
  let newArr = arr.map((row) => row.slice());

  // 격자를 나누고 90도 회전
  for (let x = 0; x < arr.length; x += 2 ** L) {
    for (let y = 0; y < arr[0].length; y += 2 ** L) {
      newArr = rotate(x, y, arr, newArr, L);
    }
  }

  // 얼음 갯수 변화
  newArr = decreaseIce(newArr);

  return newArr;
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "./20058.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, Q] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i < 2 ** N + 1; i++) {
  arr.push(input[i].split(" ").map(Number));
}
const LArr = input[2 ** N + 1].split(" ").map(Number);

for (const L of LArr) {
  arr = fireStorm(L, arr);
}

// 남아있는 얼음의 합
let totalIce = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    totalIce += arr[i][j];
  }
}

// 남아있는 얼음 중 가장 큰 덩어리 차지하는 칸 개수
let visited = Array(arr.length)
  .fill()
  .map(() => Array(arr[0].length).fill(false));

let maxSizeIceCnt = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[0].length; j++) {
    if (arr[i][j] > 0 && !visited[i][j]) {
      maxSizeIceCnt = Math.max(maxSizeIceCnt, bfs(arr, i, j, visited));
    }
  }
}

console.log(totalIce);
console.log(maxSizeIceCnt);
