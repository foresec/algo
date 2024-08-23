// 폭발 문자열이 포함될시, 모든 폭발 문자열이 폭발하여 남은 새로운 문자열을 만듦
// 새로 생긴 문자열에 폭발 문자열이 있을 수 있으므로 없어질때까지 계속
// 남은 문자열 or FLURA
const filePath = process.platform === "linux" ? "/dev/stdin" : "./9935.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const word = input[0].trim();
const bomb = input[1].trim();
const lenB = bomb.length;

const stack = [];

for (let char of word) {
  stack.push(char);

  if (stack.length >= lenB) {
    let check = true;

    for (let i = 0; i < lenB; i++) {
      // 뒤에서 부터 탐색해서 존재 확인
      if (bomb[i] !== stack[stack.length - lenB + i]) {
        check = false;
        break;
      }
    }

    // 일치한다면 제거
    if (check) {
      for (let i = 0; i < lenB; i++) {
        stack.pop();
      }
    }
  }
}

let ans = stack.join("");

console.log(ans === "" ? "FRULA" : ans);
