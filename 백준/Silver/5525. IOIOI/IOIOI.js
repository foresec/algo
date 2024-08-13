const filePath = process.platform === "linux" ? "/dev/stdin" : "./5525.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const M = parseInt(input[1]);
const S = input[2];

const PN = "I" + "OI".repeat(N);

let cnt = 0;
let idx = 0;

while (true) {
  if (S.substring(idx, idx + PN.length) === PN) {
    cnt++;
    idx += 2;
  } else {
    idx++;
  }

  if (idx + PN.length > M) break;
}


console.log(cnt);
