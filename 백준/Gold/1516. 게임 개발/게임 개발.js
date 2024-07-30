// 어떤 건물을 짓기 위해서는 먼저 지어야 할 건물이 있음
// +하지만 동시에 여러개의 건물을 지을 수 있음
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./1516.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const arr = input.slice(1).map((l) => l.split(" ").map(Number));

const need = Array(N + 1).fill(0);
const adjList = Array(N + 1)
  .fill()
  .map(() => []);

// 진입차수 저장(위상정렬의 시작 여부 가능성 판단)
const inDegrees = Array(N + 1).fill(0);

for (let i = 0; i < N; i++) {
  let building = i + 1;
  let sequence = arr[i];
  // 건설시간 저장
  need[building] = sequence[0];

  // -1을 제외하고
  for (let j = 1; j < sequence.length - 1; j++) {
    let prerequisite = sequence[j];
    // 먼저 진행해야하는 건물의 인접 리스트와 진입 차수 저장
    adjList[prerequisite].push(building);
    inDegrees[building]++;
  }
}

const q = [];
const done = Array(N + 1).fill(0);

// 진입 차수가 0인 노드가 현재 어떤 노드보다 먼저 수행할 수 있는 노드이므로(아무도 해당 노드로 향하지 않음)
// 진입 차수가 0인 건물을 가장 먼저 큐에 추가(=시작노드)
for (let i = 1; i <= N; i++) {
  if (inDegrees[i] === 0) {
    q.push(i);
    // 0인 노드의 완료시간 먼저 업데이트
    done[i] = need[i];
  }
}

// 위상 정렬 진행
while (q.length > 0) {
  let node = q.shift();
  for (const next of adjList[node]) {
    // 진입 차수 감소
    inDegrees[next] -= 1;
    // 만약 진입 차수가 0이 되면 큐에 추가
    if (inDegrees[next] === 0) {
      q.push(next);
    }

    // 후속 건물의 최소 완료 시간 업데이트
    done[next] = Math.max(done[next], done[node] + need[next]);
  }
}

done.slice(1).forEach((time) => console.log(time));
