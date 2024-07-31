function findMinValue(N, arr) {

  if (N == 1) {
    arr.sort((a, b) => b - a);
    return arr.slice(1).reduce((acc, val) => acc + val, 0);
  }
  let AF = Math.min(arr[0], arr[5]);
  let BE = Math.min(arr[1], arr[4]);
  let CD = Math.min(arr[2], arr[3]);
	
  const minList = [AF, BE, CD];
  minList.sort((a, b) => a - b);

  // N에 따라 구성의 갯수 구하기
  const dot = 4;
  const downDot = 4;
  const line = (N - 2) * 8;
  const downLine = (N - 2) * 4;
  const section = (N - 2) ** 2 * 5;

  const min1 = minList[0];
  const min2 = minList[0] + minList[1];
  const min3 = minList[0] + minList[1] + minList[2];

  let dotCnt = dot * min3 + downDot * min2;
  let lineCnt = line * min2 + downLine * min1;
  let sectionCnt = section * min1;
  return dotCnt + lineCnt + sectionCnt;
}

// 주사위 N**3개 -> 정육면체 만들기
// 꼭짓점은 3, 변에 위치한건 2, 단면은1 노출
// 바닥은 세지 않음

// BE AF DC는 붙어있을 수 없음
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./1041.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input[0];
const arr = input[1].split(" ").map(Number);

let ans = findMinValue(N, arr);
console.log(ans);
