const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./8983.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [M, N, L] = input[0].split(" ").map(Number);
const sadeList = input[1].split(" ").map(Number);
const animalList = input
  .slice(2)
  .map((animal) => animal.split(" ").map(Number));

let answer = 0;

function calculateShotLength(x, y, sadeX) {
  return Math.abs(sadeX - x) + y;
}

// '동물'을 기준으로 '사대' 탐색(사대가 x좌표만 있으므로 용이)

// 이진 탐색을 위한 정렬
sadeList.sort((a, b) => a - b);

for (const [x, y] of animalList) {
  let left = 0;
  let right = sadeList.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let sadeX = sadeList[mid];
    let dist = calculateShotLength(x, y, sadeX);

    if (dist <= L) {
      answer += 1;
      break;
    } else {
      // 비교할 사대를 바꿈
      // ex사대가 동물보다 왼쪽에 있을경우-> 오른쪽 절반 중 새로 탐색
      if (sadeX > x) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
}

console.log(answer);
