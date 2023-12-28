// [문제 링크]: https://www.acmicpc.net/problem/14502

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./14502.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
​
const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];
​
function bfs(i, j, visited, arr) {
    visited[i][j] = true;
    const q = [];
    q.push([i, j]);
​
    while (q.length > 0) {
        const [x, y] = q.shift();
​
        for (let d = 0; d < 4; d++) {
            const nx = x + dx[d];
            const ny = y + dy[d];
​
            if (!(0 <= nx && nx < N && 0 <= ny && ny < M)) {
                continue;
            }
​
            if (arr[nx][ny] === 0 && !visited[nx][ny]) {
                q.push([nx, ny]);
                visited[nx][ny] = true;
                arr[nx][ny] = 2;
            }
        }
    }
}
​
const [N, M] = input[0].split(" ").map(Number);
const arr = input.slice(1).map(line => line.split(" ").map(Number));
​
let empty = [];
​
for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (arr[i][j] === 0) {
            empty.push([i, j]);
        }
    }
}
​
let ans = 0;
​
const getCombination = (arr, n) => {
    if (n === 1) return arr.map(el => [el]);
    const result = [];
​
    arr.forEach((fixed, idx, origin) => {
        const rest = origin.slice(idx + 1);
        const combis = getCombination(rest, n - 1);
        const attached = combis.map(combi => [fixed, ...combi]);
        result.push(...attached);
    });
​
    return result;
}
​
const combinations = getCombination(empty, 3);
​
for (let comb of combinations) {
    let checkArr = arr.map(row => [...row]);
    let cnt = 0;
​
    for (let [i, j] of comb) {
        checkArr[i][j] = 1;
    }
​
    let visited = new Array(N).fill(0).map(() => new Array(M).fill(false));
​
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (checkArr[i][j] === 2 && !visited[i][j]) {
                bfs(i, j, visited, checkArr);
            }
        }
    }
​
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (checkArr[i][j] === 0) {
                cnt += 1;
            }
        }
    }
​
    ans = Math.max(ans, cnt);
}
​
console.log(ans);
​