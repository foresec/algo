function rotate(gear, direction) {
  let rotatedGear = Array(8).fill(0);
  if (direction === 1) {
    // 시계방향 회전
    for (let i = 0; i < 7; i++) {
      rotatedGear[i + 1] = gear[i];
    }
    rotatedGear[0] = gear[7];
  } else {
    // 반시계방향 회전
    for (let i = 1; i < 8; i++) {
      rotatedGear[i - 1] = gear[i];
    }
    rotatedGear[7] = gear[0];
  }
  return rotatedGear;
}

function moveGear(gears, num, direction, visited) {
  if (visited[num]) return;
  visited[num] = true;

  if (num > 0 && gears[num][6] !== gears[num - 1][2]) {
    moveGear(gears, num - 1, -direction, visited);
  }

  if (num < 3 && gears[num][2] !== gears[num + 1][6]) {
    moveGear(gears, num + 1, -direction, visited);
  }

  gears[num] = rotate(gears[num], direction);
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./14891.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input.slice(0, 4).map((l) => l.trim().split("").map(Number));
const K = parseInt(input[4]);
const orders = input
  .slice(5, 5 + K)
  .map((o) => o.trim().split(" ").map(Number));

let temp = arr.map((row) => [...row]);

orders.forEach((order) => {
  let visited = Array(4).fill(false);
  const [num, direction] = order;
  moveGear(temp, num - 1, direction, visited);
});

let ans = temp.reduce((acc, val, idx) => acc + val[0] * Math.pow(2, idx), 0);
console.log(ans);
