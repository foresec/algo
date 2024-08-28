const filePath = process.platform === "linux" ? "/dev/stdin" : "./3020.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, H] = input[0].split(" ").map(Number);
const up = Array(H + 1).fill(0);
const down = Array(H + 1).fill(0);
const arr = input.slice(1).map(Number);

for (let i = 0; i < N; i++) {
  i % 2 === 0 ? up[arr[i]]++ : down[arr[i]]++;
}

// 만나는 석순 누적합
for (let i = H - 1; i > 0; i--) {
  up[i] += up[i + 1];
  down[i] += down[i + 1];
}

let ans = Infinity;
let cnt = 0;

for (let i = 1; i <= H; i++) {
  const temp = up[i] + down[H - i + 1];

  if (temp < ans) {
    ans = temp;
    cnt = 1;
  } else if (temp === ans) {
    cnt++;
  }
}

console.log(ans, cnt);
