function getPairs(A, B, T) {
  const countA = new Map();
  const countB = new Map();

  // 각 부 배열마다 값의 횟수 저장
  for (const sum of A) {
    countA.set(sum, (countA.get(sum) || 0) + 1);
  }

  for (const sum of B) {
    countB.set(sum, (countB.get(sum) || 0) + 1);
  }

  // 빈도수를 곱해서 더함
  let cnt = 0;
  for (const [bSum, bCount] of countB.entries()) {
    let aSum = T - bSum;
    if (countA.has(aSum)) {
      cnt += countA.get(aSum) * bCount;
    }
  }
  
  return cnt;
}

// 부배열 전부 구하기
function getArrSum(arr) {
  const sumArr = [];
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    let temp = 0;
    for (let j = i; j < len; j++) {
      temp += arr[j];
      sumArr.push(temp);
    }
  }

  return sumArr;
}

// A, B 두 부배열의 합을 더해서 T가되는 모든 부 배열 쌍의 갯수
const filePath = process.platform === "linux" ? "/dev/stdin" : "./2143.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const T = parseInt(input[0]);
const nArr = input[2].split(" ").map(Number);
const mArr = input[4].split(" ").map(Number);

let ASum = getArrSum(nArr);
let BSum = getArrSum(mArr);
let ans = getPairs(ASum, BSum, T);

console.log(ans);
