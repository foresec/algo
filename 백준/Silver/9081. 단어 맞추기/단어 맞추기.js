function nextPermutation(arr) {
  const len = arr.length;

  let i = len - 2;
  while (i >= 0 && arr[i] >= arr[i + 1]) {
    i--;
  }
  let pivot = i;

  if (pivot < 0) {
    return arr
  }

  let j = len - 1;
  while (j > pivot && arr[j] <= arr[pivot]) {
    j--;
  }

  // 두 숫자 위치 교환
  [arr[pivot], arr[j]] = [arr[j], arr[pivot]];

  // i부터 마지막까지 뒤집기
  let start = pivot + 1;
  let end = len - 1;
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }

  return arr;
}

function findNext(word) {
  const wordArray = word.split("");
  const nextPerm = nextPermutation(wordArray);
  return nextPerm.join("");
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "./9081.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const T = parseInt(input[0], 10);

for (let i = 1; i <= T; i++) {
  const word = input[i].trim();
  const ans = findNext(word);
  console.log(ans);
}
