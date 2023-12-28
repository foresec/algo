// [문제 링크]: https://www.acmicpc.net/problem/2468

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./2468.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
​
const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];
​
const bfs = (i, j, visited, h) => {
    const q = []
    q.push([i, j])
​
    while (q.length > 0) {
        const [x, y] = q.shift();
​
        for (let d = 0; d < 4; d++) {
            const nx = x + dx[d]
            const ny = y + dy[d]
​
​
            if (!(0 <= nx && nx < N && 0 <= ny && ny < N)) {
                continue
            }
​
​
            if (arr[nx][ny] > h && !visited[nx][ny]) {
                q.push([nx, ny])
                visited[nx][ny] = true
            }
        }
    }
​
​
}
​
const N = parseInt(input[0]);
const arr = input.slice(1).map(line => line.split(' ').map(Number));
​
let ans = 1
let max_h = Math.max(...arr.map(row => Math.max(...row))) - 1
​
for (let h = 1; h <= max_h; h++) {
    let cnt = 0
    const visited = Array.from({length : N}, ()=> Array(N).fill(false))
​
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (arr[i][j] > h && !visited[i][j]) {
                visited[i][j] = true;
                bfs(i, j, visited, h)
                cnt += 1
            }
        }
    }
​
    ans = Math.max(cnt, ans)
​
}
​
console.log(ans)