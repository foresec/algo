const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./1339.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const words = input
  .slice(1)
  .map((word) => word.trim())
  .sort((a, b) => b.length - a.length);

const weight = new Map();

//우선순위 부여
for (let i = 0; i < N; i++) {
  const word = words[i];
  const len = word.length;
  for (let j = 0; j < len; j++) {
    const char = word[j];
    const posWeight = Math.pow(10, len - 1 - j);
    weight.set(char, (weight.get(char) || 0) + posWeight);
  }
}

const check = [...weight.entries()].sort((a, b) => b[1] - a[1]);
const numMap = new Map();
let num = 9;
for (const c of check) {
  numMap.set(c[0], num);
  num--;
}

let ans = 0;
for (const word of words) {
  let wordVal = "";
  for (const a of word) {
    wordVal += numMap.get(a);
  }
  ans += parseInt(wordVal);
}

console.log(ans);