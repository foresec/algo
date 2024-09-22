const dir = [
  [0, 1], // AB
  [0, 2], // AC
  [1, 0], // BA
  [1, 2], // BC
  [2, 0], // CA
  [2, 1], // CB
];

function bfs(a, b, c) {
  let q = [[a, b, c]];
  visited[a][b] = true;

  while (q.length) {
    let [a, b, c] = q.shift();

    if (a === 0) cntSet.add(c);

    for (let [from, to] of dir) {
      let nn = [a, b, c].slice();

      // 이동 가능한 물의 양
      const val = Math.min(nn[from], arr[to] - nn[to]);

      // 물 이동
      nn[from] -= val;
      nn[to] += val;

      // 첫/두번째 물통 체크 확인
      if (!visited[nn[0]][nn[1]]) {
        visited[nn[0]][nn[1]] = true;
        q.push(nn);
      }
    }
  }
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "./2251.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const A = parseInt(input[0]);
const B = parseInt(input[1]);
const C = parseInt(input[2]);

const visited = Array(201)
  .fill()
  .map(() => Array(201).fill(false));

const cntSet = new Set();
const arr = [A, B, C];

bfs(0, 0, C);

let answer = Array(...cntSet).sort((a, b) => a - b);
console.log(answer.join(" "));
