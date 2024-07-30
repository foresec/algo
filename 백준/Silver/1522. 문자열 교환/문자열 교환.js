// 교환 횟수
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./1522.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input[0];
const length = arr.length;

const aCnt = arr.split("").filter((char) => char === "a").length;
let minCnt = Infinity;

if (aCnt === length) {
  console.log(0);
  process.exit(0);
} else {
  for (let i = 0; i < length; i++) {
    let bCnt = 0;

    for (let j = i; j < i + aCnt; j++) {
      if (arr[j % length] === "b") {
        bCnt++;
      }
    }
    minCnt = Math.min(minCnt, bCnt);
  }

  console.log(minCnt);
}
