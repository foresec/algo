// [문제 링크]: https://www.acmicpc.net/problem/1068

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
​
const N = parseInt(input[0]);
const parent = input[1].split(' ').map(Number);
const removeNode = parseInt(input[2]);
​
const removeEffect = (remove) => {
    parent[remove] = -2;
​
    // 삭제노드를 부모로 가진 모든 자식노드의 부모를 재귀를 통해 -2로 업데이트
    for (let i = 0; i < N; i++) {
            if (remove === parent[i]) {
                    removeEffect(i);
            }
    }
}
​
removeEffect(removeNode);
​
// 해당 노드의 부모가 삭제 되지 않았음 && 해당 노드의 자식노드가 존재하지 않을 때 
let cnt = 0
​
const parentSet = new Set(parent);
​
for (let i = 0; i < N; i++) {
    if (parent[i] !== -2 && !parentSet.has(i)) {
        cnt += 1;
    }
}
​
​
console.log(cnt)