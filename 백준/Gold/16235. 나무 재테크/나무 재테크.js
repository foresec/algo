const dx = [1, 0, -1, 0, 1, 1, -1, -1];
const dy = [0, -1, 0, 1, 1, -1, -1, 1];

function springandsummer() {
  // food
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      let temp = tree[i][j];
      temp.sort((a, b) => a - b);
      let alive = [];
      let deadTree = 0;
      let leftFood = food[i][j];
      for (let t = 0; t < temp.length; t++) {
        let age = temp[t];
        if (age <= leftFood) {
          leftFood -= age;
          alive.push(age + 1);
        } else {
          deadTree += Math.floor(age / 2);
					// break
        }
      }
      tree[i][j] = alive;
      food[i][j] = leftFood + deadTree;
    }
  }
}

function autumn() {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      for (let t of tree[i][j]) {
        if (t % 5 === 0) {
          for (let d = 0; d < 8; d++) {
            let nx = i + dx[d];
            let ny = j + dy[d];
            if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
            tree[nx][ny].push(1);
          }
        }
      }
    }
  }
}

function winter() {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      food[i][j] += plus[i][j];
    }
  }
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./16235.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, K] = input[0].split(" ").map(Number);
const plus = [];
const tree = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => [])
);

const food = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => 5)
);

for (let i = 1; i < N + 1; i++) {
  plus.push(input[i].split(" ").map(Number));
}

for (let i = 1 + N; i < M + N + 1; i++) {
  let [r, c, age] = input[i].split(" ").map(Number);
  tree[r - 1][c - 1].push(age);
}

for (let k = 0; k < K; k++) {
  springandsummer();
  autumn();
  winter();
}

let ans = 0;
for (const line of tree) {
  for (const tline of line) {
    ans += tline.length;
  }
}

console.log(ans);
