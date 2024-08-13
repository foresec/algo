// 사전 패턴처리함수
// 접두사/저비사 간의 일치 비교해서 저장
// I, IO, IOI, IOIO, IOIOI
// [0(무조건 0),0,1(I일치),2(IO일치),3(IOI일치)]
function KMPTable(pattern) {
  const len = pattern.length;
  const check = Array(len).fill(0);

  let pidx = 0;
  for (let i = 1; i < len; i++) {
    while (pidx > 0 && pattern[i] !== pattern[pidx]) {
      pidx = check[pidx - 1];
    }
		// 값이 일치할 경웨 pidx를 증가시키고 값을저장
    if (pattern[i] === pattern[pidx]) {
      pidx++;
      check[i] = pidx;
    }
  }

  return check;
}

function KMP(word, pattern) {
  const check = KMPTable(pattern);

  const result = [];
  let pidx = 0;

  for (let i = 0; i < word.length; i++) {
		
    while (pidx > 0 && word[i] !== pattern[pidx]) {
      pidx = check[pidx - 1];
    }
		
    if (word[i] === pattern[pidx]) {
      if (pidx === pattern.length - 1) {
        result.push(i - pattern.length + 2);
        pidx = check[pidx];
      } else {
        pidx++;
      }
    }
  }

  return result.length;
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "./5525.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const M = parseInt(input[1]);
const S = input[2];

const PN = "I" + "OI".repeat(N);

let ans = KMP(S, PN);

console.log(ans);
