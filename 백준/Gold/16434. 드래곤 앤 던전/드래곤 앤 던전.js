function isSurvive(curATK, maxHP, arr) {
  let curHP = BigInt(maxHP);
  curATK = BigInt(curATK); // 공격력도 BigInt로 변환

  for (let [type, atk, hp] of arr) {
    const atkBigInt = BigInt(atk);
    const hpBigInt = BigInt(hp);

    if (type === 1) {
      const turnsToKill = (hpBigInt + curATK - 1n) / curATK;
      curHP -= atkBigInt * (turnsToKill - 1n);
    } else {
      curATK += atkBigInt;
      curHP = curHP + hpBigInt;
      if (curHP > BigInt(maxHP)) {
        curHP = BigInt(maxHP);
      }
    }

    if (curHP <= 0n) {
      return false;
    }
  }

  return true;
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "./16434.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, A] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((line) => line.split(" ").map(Number));

let start = BigInt(1);
let end = BigInt(123456 * 1000000 * 1000000);

let answer = BigInt(0);

while (start <= end) {
  const mid = (start + end) / 2n;

  if (isSurvive(Number(A), Number(mid), arr)) {
    answer = mid;
    end = mid - 1n;
  } else {
    start = mid + 1n;
  }
}

console.log(answer.toString());
