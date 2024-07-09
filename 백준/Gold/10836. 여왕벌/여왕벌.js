function growOnBorder(M, arr, values) {
  let startX = M - 1;
  let startY = 0;
  let idx = 0;

  while (idx < values.length) {
    arr[startX][startY] += values[idx];

    let nx = startX - 1;
    let ny = startY;

    if (nx < 0 || nx >= M || ny < 0 || ny >= M) {
      nx = startX;
      ny = startY + 1;
    }
    startX = nx;
    startY = ny;
    idx++;
  }

  return arr;
}

function growAfterBorder(M, arr) {
  for (let i = 1; i < M; i++) {
    for (let j = 1; j < M; j++) {
      let maxVal = Math.max(arr[i - 1][j], arr[i][j - 1], arr[i - 1][j - 1]);
      arr[i][j] = maxVal;
    }
  }
  return arr;
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./10836.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [M, N] = input[0].split(" ").map(Number);

let arr = Array(M)
  .fill(0)
  .map(() => Array(M).fill(1));

for (let i = 1; i < N + 1; i++) {
  let [zero, one, two] = input[i].split(" ").map(Number);

  let temp = Array(zero + one + two);
  let idx = 0;

  for (let j = 0; j < zero; j++) {
    temp[idx++] = 0;
  }

  for (let j = 0; j < one; j++) {
    temp[idx++] = 1;
  }

  for (let j = 0; j < two; j++) {
    temp[idx++] = 2;
  }

  // 성장1
  arr = growOnBorder(M, arr, temp);
  // 성장2
  arr = growAfterBorder(M, arr);
}

for (const row of arr) {
  console.log(...row);
}
