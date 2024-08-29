function inHouse(houses, val, C) {
  let cnt = 1;
  let current = houses[0];

  for (let i = 1; i < houses.length; i++) {
    if (houses[i] - current >= val) {
      cnt++;
      current = houses[i];

      // 조건을 달성하면 true
      if (cnt === C) return true;
    }
  }
  return false;
}

// 두 공유기 사이의 거리를 최대로
const filePath = process.platform === "linux" ? "/dev/stdin" : "./2110.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, C] = input[0].split(" ").map(Number);
const houses = input.slice(1).map(Number);
houses.sort((a, b) => a - b);


let left = 1;
let right = houses.at(-1)

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  if (inHouse(houses, mid, C)) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(right);
