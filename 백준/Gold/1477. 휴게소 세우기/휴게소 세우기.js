function getMinLength(restAreaList, N, M, L) {
  if (N === 0) return Math.ceil(L / (M + 1));

  restAreaList.sort((a, b) => a - b);

  // left, right는 인덱스가 아닌, 두 지점 사이의 거리값을 가져가는 변수
  // 최종적으로 로직상 둘중 큰 값이 될 수 있는 left를 return
  let left = 1;
  let right = L;

  while (left <= right) {
    // 현재까지의 임의의 거리의 반값
    let mid = Math.floor((left + right) / 2);
    let check = 0;
    let prev = 0;

    // 매번 휴게소간 거리를 구해서 mid값과 비교(시작점과 첫번째 휴게소부터 시작)
    for (let i = 0; i <= N; i++) {
      if (restAreaList[i] - prev > mid) {
        check += Math.ceil((restAreaList[i] - prev) / mid) - 1;
      }
      if (i < N) prev = restAreaList[i];
    }

    // 마지막 휴게소와 길끝까지의 거리
    if (L - prev > mid) {
      check += Math.ceil((L - prev) / mid) - 1;
    }

    // 필요한 휴게소 수가 세울수 있는 휴게소 수를 비교하여 가능한 '거리의 범위'를 줄여감
    if (check <= M) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

// M개의 휴게소를 더 지었을 때 휴게소가 없는 구간의 길이의 최댓값을 최소로 해야함
// 단 새로운 휴게소는 정수에 세울 수 있으며, 이미 있던 자리나 고속도로의 끝에도 세울수 없다
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./1477.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, L] = input[0].split(" ").map(Number);
let arr = [];
if (N > 0) arr = input[1].split(" ").map(Number);

let ans = getMinLength(arr, N, M, L);

console.log(ans);
