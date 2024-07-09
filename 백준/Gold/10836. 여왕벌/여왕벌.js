const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./10836.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [M, N] = input[0].split(" ").map(Number);

let values = Array(2 * M - 1).fill(0);

for (let i = 1; i <= N; i++) {
  let [zero, one, two] = input[i].split(" ").map(Number);
  let idx = 0;

  for (let j = 0; j < zero; j++) {
    values[idx++] += 0;
  }

  for (let j = 0; j < one; j++) {
    values[idx++] += 1;
  }

  for (let j = 0; j < two; j++) {
    values[idx++] += 2;
  }
}

for (let i = M - 1; i >= 0; i--) {
  // 왼쪽열 채워넣으면서
  let row = [];
  row.push(values[i] + 1);
  for (let j = M; j < 2 * M - 1; j++) {
    // 나머지 열도 채워넣어 row완성 (나머지열은 최상단 열의 value와 같음)
    row.push(values[j] + 1);
  }
  console.log(row.join(" "));
}
