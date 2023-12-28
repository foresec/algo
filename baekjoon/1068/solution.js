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
    for (let i = 0; i < N; i++) {
            if (remove === parent[i]) {
                    removeEffect(i);
            }
    }
}
​
removeEffect(removeNode);
​
let cnt = 0
for (let i = 0; i < N; i++) {
    if (parent[i] !== -2 && !parent.includes(i)) {
        cnt += 1;
    }
}
​
​
console.log(cnt)