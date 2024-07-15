// 79

function breakMaxEgg(eggList, depth) {
  // 끝까지 갔으면 0 이하인 계란 갯수 세기
  if (depth === eggList.length) {
    let brokenCnt = eggList.filter((egg) => egg[0] <= 0).length;
    return brokenCnt;
  }

  // 현재 계란이 이미 깨진 경우 다음 계란으로 이동
  if (eggList[depth][0] <= 0) {
    return breakMaxEgg(eggList, depth + 1);
  }

  let maxVal = 0;
  let hit = false;

  for (let i = 0; i < eggList.length; i++) {
    if (i !== depth && eggList[i][0] > 0) {
      hit = true;
      // 계란 치기
      eggList[depth][0] -= eggList[i][1];
      eggList[i][0] -= eggList[depth][1];

      // 재귀 호출하여 최대 깬 계란 수 갱신
      maxVal = Math.max(maxVal, breakMaxEgg(eggList, depth + 1));

      // 원래 상태로 되돌리기 (백트래킹)
      eggList[depth][0] += eggList[i][1];
      eggList[i][0] += eggList[depth][1];
    }
  }

  if (hit === false) {
    return breakMaxEgg(eggList, depth + 1);
  }

  return maxVal;
}

// 왼쪽에 있는 계란부터 한번씩만 다른 계란을 쳐서 최대한 많은 계란을 깨는 문제
// 계란을 치면 각 계란의 내구도는 상대 계란의 무게만큼 깎임
// 내구도 0인 계란은 깨짐
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./16987.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const eggList = input.slice(1).map((line) => line.split(" ").map(Number));

const result = breakMaxEgg(eggList, 0);
console.log(result);
