function separateNum(formulas) {
  let ans = [];
  for (const formula of formulas) {
    let result = "";
    const length = formula.length;

    for (let i = 0; i < length; i++) {
      result += formula[i];

      if (i + 1 < length && isDigit(formula[i]) && isDigit(formula[i + 1])) {
        result += " ";
      }
    }
    ans.push(result);
  }

  return ans;
}

function isDigit(char) {
  return char >= "0" && char <= "9";
}

function isZero(formulas) {
  let result = [];
  for (const formula of formulas) {
    const numbers = formula.split(/[+-]/).map(Number);
    const operators = formula.match(/[+-]/g) || [];

    let val = numbers[0];

    for (let i = 0; i < operators.length; i++) {
      const oper = operators[i];
      const number = numbers[i + 1];

      if (oper === "+") {
        val += number;
      } else {
        val -= number;
      }
    }

    if (val === 0) {
      result.push(formula);
    }
  }
  return result;
}

function getComb(length) {
  const char = ["+", "-", " "];
  const result = [];

  function generate(current, depth) {
    if (depth === length) {
      result.push(current);
      return;
    }
    for (const c of char) {
      generate(current + c, depth + 1);
    }
  }

  generate("", 0);
  return result;
}

function findFormula(arr) {
  const combinations = getComb(arr.length - 1);
  const formulas = [];
  const len1 = arr.length;

  for (const combination of combinations) {
    const len2 = combination.length;
    let formula = "";
    const maxLen = Math.max(len1, len2);
    let val = 0;

    for (let i = 0; i < maxLen; i++) {
      if (i < len1) {
        formula += arr[i].toString();
      }
      if (i < len2) {
        let temp = combination[i];
        if (temp === " ") continue;
        formula += temp;
      }
    }

    formulas.push(formula);
  }
  return formulas;
}

// 1~N까지의 수를 오름차순으로 쓴 수열
// 그 사이에 +, -, 공백(숫자를 이어붙임)을 통해 만든 식이 0이 될수 있는지 판별
// 가능한 수식을 전부 출력
const filePath = process.platform === "linux" ? "/dev/stdin" : "./7490.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const T = parseInt(input[0]);

for (let t = 1; t <= T; t++) {
  let N = parseInt(input[t]);
  const arr = Array(N)
    .fill()
    .map((_, i) => i + 1);
  let fomulas = findFormula(arr);
  let zeroFormula = isZero(fomulas);
  let ans = separateNum(zeroFormula);
  ans.sort();

  console.log(ans.join("\n"));
  console.log();
}
