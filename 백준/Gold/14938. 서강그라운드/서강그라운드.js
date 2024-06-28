function getMaxItem(adj, itemList, m, n, start) {
  const dist = Array(n).fill(Infinity);
  dist[start] = 0;

  let q = [[start, 0]];

  while (q.length > 0) {
    let [node, val] = q.shift();

    for (let [nn, nVal] of adj[node]) {
      let newVal = val + nVal;

      if (newVal < dist[nn]) {
        q.push([nn, newVal]);
        dist[nn] = newVal;
      }
    }
  }

  const checkVal = dist.reduce((acc, d, idx) => {
    if (d <= m) acc.push(idx);
    return acc;
  }, []);

  let cnt = 0;

  for (let i = 0; i < checkVal.length; i++) {
    cnt += itemList[checkVal[i]];
  }
  return cnt;
}

// 아이템 최대갯수

// 양방향이며, 수색범위 내의 모든 지역아이템 습득 가능
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./14938.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, r] = input[0].split(" ").map(Number);
const itemList = input[1].split(" ").map(Number);
const adj = Array.from({ length: n }, () => []);
// console.log(adj);
let ans = 0;
for (let i = 2; i < r + 2; i++) {
  let [s, e, v] = input[i].split(" ").map(Number);
  adj[s - 1].push([e - 1, v]);
  adj[e - 1].push([s - 1, v]);
}

for (let i = 0; i < n; i++) {
  ans = Math.max(ans, getMaxItem(adj, itemList, m, n, i));
}

console.log(ans);
