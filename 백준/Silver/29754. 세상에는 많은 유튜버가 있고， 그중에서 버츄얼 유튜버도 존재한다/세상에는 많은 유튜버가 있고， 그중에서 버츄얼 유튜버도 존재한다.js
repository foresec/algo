function getTime(str) {
  let [hour, minute] = str.split(":").map(Number);
  return hour * 60 + minute;
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "./29754.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((l) => l.trim().split(" "));

const nameMap = {};

arr.forEach(([name, d, start, end]) => {
  const day = parseInt(d);
  const duration = getTime(end) - getTime(start);
  const weekIdx = Math.floor((day - 1) / 7);

  if (!nameMap[name]) {
    nameMap[name] = [];
  }

  if (!nameMap[name][weekIdx]) {
    nameMap[name][weekIdx] = { total: 0, dayCnt: 0 };
  }

  nameMap[name][weekIdx].total += duration;
  nameMap[name][weekIdx].dayCnt += 1;
});

const weekCnt = Math.floor(M / 7);

const people = [];
Object.keys(nameMap).forEach((name) => {
  let check = 0;

  nameMap[name].forEach((week) => {
    if (week && week.total >= 3600 && week.dayCnt >= 5) {
      check++;
    }
  });

  // 방송본날까지 주의 수만큼 충족한다면 추가
  if (check === weekCnt) {
    people.push(name);
  }
});

if (people.length > 0) {
  people.sort();
  console.log(people.join("\n"));
} else {
  console.log("-1");
}
