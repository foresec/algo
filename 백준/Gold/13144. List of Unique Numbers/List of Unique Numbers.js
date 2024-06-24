function getNum(N, arr) {
	let cnt = 0;
	let left = 0;
	let right = 0
	let temp = new Set();


	while (right <N) {
			// 현재 숫자가 이미 Set에 있는지 확인
			while (temp.has(arr[right])) {
				temp.delete(arr[left]); 
				left += 1
			}
			temp.add(arr[right]);

			// 현재 부분 수열의 길이만큼 count에 추가
			cnt += temp.size

			right += 1
	}

	return cnt;
}

// 배열의 연속된 일부를 뽑았을 때 에서 다 다른수가 등장하는 경우의 수
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./13144.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);

let answer = getNum(N, arr);

console.log(answer);
