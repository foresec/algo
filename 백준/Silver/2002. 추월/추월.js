const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './2022.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0]);

// 들어간 차
const inQueue = input.slice(1, N + 1);

// 나온 차
const outQueue = input.slice(N + 1);

let answer = 0;

while (outQueue.length > 0) {
    const outCar = outQueue.shift();
    if (inQueue[0] !== outCar) {
        // 출구 차가 큐의 첫 번째 차와 다를 경우
        answer++;
        const index = inQueue.indexOf(outCar);
        if (index !== -1) {
            inQueue.splice(index, 1); // 큐에서 해당 차량 제거
        }
    } else {
       
        inQueue.shift(); // 큐의 첫 번째 차량 제거
    }
}

console.log(answer);
