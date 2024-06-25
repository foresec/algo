function find(parent, x) {
  if (parent[x] !== x) {
    parent[x] = find(parent, parent[x]);
  }
  return parent[x];
}

function union(parent, a, b) {
  const parentA = find(parent, a);
  const parentB = find(parent, b);

  // 최대한 오름차순으로 묶음
  if (parentA <= parentB) {
    parent[parentB] = parentA;
  } else if (parentA > parentB) {
    parent[parentA] = parentB;
  }
}

function getMaxParty(N, M, know, parties) {
  let cnt = M;
  // 진실을 아는 사람이 없다면 조기 return
  if (!know[0]) return cnt;

  // parent(root)를 저장하는 배열
  const parent = Array.from({ length: N + 1 }, (_, idx) => idx);
  const knowSet = new Set(know.slice(1));

  // 1. 진실을 아는 사람은 0으로 묶음(parent가 0)
  for (let person of knowSet) {
    union(parent, 0, person);
  }

  // 2. 파티에 참여한 사람들을 같은 집합에 묶이도록 함
  for (let party of parties) {
    let firstPerson = party[1];
    for (let i = 2; i < party.length; i++) {
      let comparedPerson = party[i];
      union(parent, firstPerson, comparedPerson);
    }
  }

  // 3. 파티를 탐색하며 소속된 사람의 최종 집합의 소속(업데이트를 위해 find를 써야함)이
  // '진실을 아는 집합(0)'임을 확인한다면 해당 파티는 거짓말을 할 수 없음
  for (let party of parties) {
    for (let i = 1; i < party.length; i++) {
      let person = party[i];
      if (find(parent, person) === 0) {
        cnt -= 1;
        break;
      }
    }
  }

  return cnt;
}

// 거짓말쟁이로 판단되지 않으면서, 거짓말을 퍼뜨릴수 있는 파티 갯수 최댓값
const fs = require("fs");
const { join } = require("path/posix");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./1043.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const know = input[1].split(" ").map(Number);
const parties = input.slice(2).map((l) => l.split(" ").map(Number));

let answer = getMaxParty(N, M, know, parties);

console.log(answer);
