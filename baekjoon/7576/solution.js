// [문제 링크]: https://www.acmicpc.net/problem/7576

// const fs = require("fs");
​
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./7576.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n");
​
// const dx = [1, 0, -1, 0];
// const dy = [0, -1, 0, 1];
​
// // tomato를 익히고 토마토 갯수로 조건을 판단하여 결과를 반환하는 함수
// function bfs(tom) {
//   const q = [...tom];
//   // day가져가기
//   let day = 0;
//   let tomatoCnt = 0;
//   while (q.length > 0) {
//      const currentSize = q.length;
//      // 여기서 현재 토마토의 갯수 만큼 익힘을 진행하고 day + 1을 함
//     for (let i = 0; i < currentSize; i++) {
//       const [x, y] = q.shift();
​
//       for (let d = 0; d < 4; d++) {
//         const nx = x + dx[d];
//         const ny = y + dy[d];
​
//         if (!(0 <= nx && nx < N && 0 <= ny && ny < M)) continue;
​
//         // 안익은 토마토를 익은 토마토로
//         if (!arr[nx][ny]) {
//           q.push([nx, ny]);
//           arr[nx][ny] = 1;
//           tomatoCnt++;
//         }
//       }
​
//     }
//      day++;
//   }
​
//   return tomatoCnt === zeroTomato ? day - 1 : -1;
// }
​
// const [M, N] = input[0].split(" ").map(Number);
// const arr = input.slice(1).map((line) => line.split(" ").map(Number));
​
// let ans = 0;
// const tomato = [];
// // 전체 토마토 갯수를 미리 셈
// let zeroTomato = 0;
​
// for (let i = 0; i < N; i++) {
//   for (let j = 0; j < M; j++) {
//     if (arr[i][j] === 1) {
//       tomato.push([i, j]);
//     } else if (arr[i][j] === 0) {
//       zeroTomato++;
//     }
//   }
// }
​
// ans = bfs(tomato);
​
// console.log(ans);
​
const fs = require("fs");
​
const filePath = process.platform === "linux" ? "/dev/stdin" : "./7576.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
​
const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];
​
function bfs(tom) {
  const q = [...tom];
    let head = 0
  while (q.length > head) {
        // shift가 시간초과의 문제였음 
    const [x, y] = q[head];
​
    for (let d = 0; d < 4; d++) {
      const nx = x + dx[d];
      const ny = y + dy[d];
​
      if (!(0 <= nx && nx < N && 0 <= ny && ny < M)) {
        continue;
      }
​
      // 안익은 토마토일 때 1씩 더해감
      if (arr[nx][ny] === 0) {
        q.push([nx, ny]);
        arr[nx][ny] = arr[x][y] + 1;
      }
    }
        head++
  }
}
​
const [M, N] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((line) => line.split(" ").map(Number));
​
let ans = 0;
​
const tomato = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (arr[i][j] === 1) {
      tomato.push([i, j]);
    }
  }
}
​
bfs(tomato);
ans = Math.max(...arr.map((row) => Math.max(...row)));
​
// 안익은 토마토가 남아있는지 확인
for (let i = 0; i < N; i++) { 
    if (arr[i].includes(0)) {
            console.log(-1);
            process.exit()
    }           
}
​
console.log(ans - 1);