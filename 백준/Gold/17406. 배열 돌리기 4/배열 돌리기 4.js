function rotate(arr, how) {
  const [r, c, s] = how;
  const newArr = arr.map((row) => row.slice());
  // 회전이 일어나는 경계
  const X1 = r - s - 1;
  const Y1 = c - s - 1;
  const X2 = r + s - 1;
  const Y2 = c + s - 1;

  // 바깥에서 안쪽으로 줄여가며
  for (let toInside = 0; toInside < s; toInside++) {
    const x1 = X1 + toInside;
    const y1 = Y1 + toInside;
    const x2 = X2 - toInside;
    const y2 = Y2 - toInside;

    // 위쪽 행
    for (let i = y1; i < y2; i++) {
      newArr[x1][i + 1] = arr[x1][i];
    }

    // 오른쪽 열
    for (let i = x1; i < x2; i++) {
      newArr[i + 1][y2] = arr[i][y2];
    }

    // 아래 행
    for (let i = y1; i < y2; i++) {
      newArr[x2][i] = arr[x2][i + 1];
    }

    // 왼쪽 열
    for (let i = x1; i < x2; i++) {
      newArr[i][y1] = arr[i + 1][y1];
    }
  }
  return newArr;
}

function permutate(arr) {
  const result = [];

  function dfs(currentArr, existedArr) {
    // 내부 갯수만큼 끝까지 도달했다면 반영
    if (existedArr.length === 0) {
      result.push([...currentArr]);
      return;
    }
    for (let i = 0; i < existedArr.length; i++) {
      // 새 배열 생성
      const current = [...currentArr, existedArr[i]];
      // 들어간 부분 제외
      const modified = existedArr.filter((_, index) => index !== i);
      dfs(current, modified);
    }
  }
  dfs([], arr);
  return result;
}

// 주어진 회전 연산(순서는 자유) 후 가로배열 중 최솟값
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./17406.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, K] = input[0].split(" ").map(Number);
const arr = input.slice(1, N + 1).map((line) => line.split(" ").map(Number));
const orders = input.slice(N + 1).map((line) => line.split(" ").map(Number));

// 경우의 수를 담은 배열(순열)
const permutations = permutate(orders);

let minVal = Infinity;
permutations.forEach((permutation) => {
  let currentArr = arr.map((row) => row.slice());

  // 경우의 수 순서대로 전부 회전해서 최솟값 반영
  permutation.forEach((order) => {
    currentArr = rotate(currentArr, order);
  });
  let temp = Math.min(
    ...currentArr.map((row) => row.reduce((a, b) => a + b, 0))
  );
  minVal = Math.min(minVal, temp);
});

console.log(minVal);
