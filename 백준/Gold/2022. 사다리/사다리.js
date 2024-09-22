function getHeight(a, b) {
  return Math.sqrt(a * a - b * b);
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "./2022-1.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const x = parseFloat(input[0]);
const y = parseFloat(input[1]);
const c = parseFloat(input[2]);

let left = 1
let right = Math.min(x, y);

while (right - left > 0.0001) {
  const mid = (left + right) / 2;
  const c1 = getHeight(x, mid);
  const c2 = getHeight(y, mid);

  const newC = (c1 * c2) / (c1 + c2);

  if (newC > c) {
    left = mid;
  } else {
    right = mid;
  }
}

console.log(left.toFixed(3));
