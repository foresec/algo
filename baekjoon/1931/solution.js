// [문제 링크]: https://www.acmicpc.net/problem/1931

// 사용할 수 있는 회의의 최대 개수
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./1931.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n")
​
// let input = fs.readFileSync(filePath).toString().trim().split("\n")
​
const N = parseInt(input[0]);
const arr = input.slice(1).map((line) => line.split(" ").map(Number));
​
// 끝나는 시간, 시작시간 순으로 오름차순으로 정렬
​
// 왜 얘는 되고
// arr.sort((a, b) => {
//   return a[1] - b[1] || a[0] - b[0];
// });
​
​
arr.sort((a, b) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});
​
let cnt = 1;
let now = arr[0][1];
​
for (let i = 1; i < N; i++) {
  if (now <= arr[i][0]) {
    now = arr[i][1];
    cnt += 1;
  }
}
console.log(cnt);
​