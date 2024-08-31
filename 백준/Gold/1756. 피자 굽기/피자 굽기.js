const filePath = process.platform === "linux" ? "/dev/stdin" : "./1756.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [D, N] = input[0].split(" ").map(Number);
let oven = input[1].split(" ").map(Number);
const pizza = input[2].split(" ").map(Number);

// 위에서부터 가능한 최대 지름크기 맞추기
for (let i = 1; i < D; i++) {
  oven[i] = Math.min(oven[i], oven[i - 1]);
}

let now = 0;
for (let i = D - 1; i >= 0; i--) {
  if (pizza[now] > oven[i]) continue;

  now++;

  if (now === N) {
    console.log(i + 1);
    process.exit(0);
  }
}

console.log(0);
