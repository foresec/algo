function calculate(x, y, d1, d2, total) {
  let check = Array(N + 1)
    .fill()
    .map(() => Array(N + 1).fill(0));

  // 경계선 설정
  // d1
  for (let i = 0; i <= d1; i++) {
    if (x + i <= N && y - i >= 1) check[x + i][y - i] = 5;
    if (x + d2 + i <= N && y + d2 - i >= 1) check[x + d2 + i][y + d2 - i] = 5;
  }
  // d2
  for (let i = 0; i <= d2; i++) {
    if (x + i <= N && y + i <= N) check[x + i][y + i] = 5;
    if (x + d1 + i <= N && y - d1 + i <= N) check[x + d1 + i][y - d1 + i] = 5;
  }

  let areaPeople = [0, 0, 0, 0, total];

  // 1구역
  for (let i = 1; i < x + d1; i++) {
    for (let j = 1; j <= y; j++) {
      if (check[i][j] === 5) break;
      areaPeople[0] += arr[i - 1][j - 1];
    }
  }

  // 2구역
  for (let i = 1; i <= x + d2; i++) {
    for (let j = N; j > y; j--) {
      if (check[i][j] === 5) break;
      areaPeople[1] += arr[i - 1][j - 1];
    }
  }

  // 3구역
  for (let i = x + d1; i <= N; i++) {
    for (let j = 1; j < y - d1 + d2; j++) {
      if (check[i][j] === 5) break;
      areaPeople[2] += arr[i - 1][j - 1];
    }
  }

  // 4구역
  for (let i = x + d2 + 1; i <= N; i++) {
    for (let j = N; j >= y - d1 + d2; j--) {
      if (check[i][j] === 5) break;
      areaPeople[3] += arr[i - 1][j - 1];
    }
  }

  // 5구역
  for (let i = 0; i < 4; i++) {
    areaPeople[4] -= areaPeople[i];
  }

  let minVal = Math.min(...areaPeople);
  let maxVal = Math.max(...areaPeople);

  return maxVal - minVal;
}
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./17779.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const arr = input.slice(1).map((l) => l.split(" ").map(Number));

let total = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    total += arr[i][j];
  }
}

let ans = Infinity;

for (let x = 1; x <= N; x++) {
  for (let y = 1; y <= N; y++) {
    for (let d1 = 1; d1 <= N; d1++) {
      for (let d2 = 1; d2 <= N; d2++) {
        if (
          1 <= x &&
          x < x + d1 + d2 &&
          x + d1 + d2 <= N &&
          1 <= y - d1 &&
          y < y + d2 &&
          y + d2 <= N
        ) {
          let temp = calculate(x, y, d1, d2, total);
          ans = Math.min(ans, temp);
        }
      }
    }
  }
}

console.log(ans);
