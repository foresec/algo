function isDivided(val, arr) {
  let minVal = arr[0];
  let maxVal = arr[0];

  // 구간 수
  let cnt = 1;

  for (let i = 0; i < N; i++) {
    minVal = Math.min(minVal, arr[i]);
    maxVal = Math.max(maxVal, arr[i]);

    // 값이 넘어갈때마다 구간을 새롭게 추가
    if (maxVal - minVal > val) {
      cnt++;
      minVal = arr[i];
      maxVal = arr[i];
    }

    // 나눠야하는 구간보다 갯수가 많아지면 실패
    if (cnt > M) return false;
  }
  return true;
}

// 배열을 M개이하의 구간으로 나누어 구간 점수의 최댓값이 제일 작게 나오는 경우
// 구간 값은 구간 내 최댓값-최솟값
const filePath = process.platform === "linux" ? "/dev/stdin" : "./13397.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

// 구간 값
let left = 0;
let right = 10000;

while (left < right) {
  const mid = Math.floor((left + right) / 2);

  if (isDivided(mid, arr)) {
    right = mid;
  } else {
    left = mid + 1;
  }
}

console.log(left);
