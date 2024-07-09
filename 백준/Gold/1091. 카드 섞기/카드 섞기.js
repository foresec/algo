const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./1091.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0].trim());
const P = input[1].trim().split(" ").map(Number);
const S = input[2].trim().split(" ").map(Number);

let cardList = new Array(N).fill().map((_, i) => i % 3);
let cnt = 0;
let maxAttempts = 120120;
while (true) {
  let temp = cardList.slice();

  let equal = true;
  for (let i = 0; i < P.length; i++) {
    if (temp[i] !== P[i]) {
      equal = false;
      break;
    }
  }
  // 같다면 찾았으니 break
  if (equal) break;

  // 카드 위치 섞기
  for (let i = 0; i < N; i++) {
    cardList[i] = temp[S[i]];
  }
  cnt++;

  // 시도횟수 초과시 -1 출력 및 종료
  if (cnt > maxAttempts) {
    console.log(-1);
    process.exit();
  }
}

console.log(cnt);
