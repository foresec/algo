function dfs(n, adj, visited, colorType, isGraph) {
	visited[n] = true;

	for (const nn of adj[n]) {
			if (!visited[nn]) {
					// 탐색하지 않은 노드라면 다른 그룹으로 색칠 후 탐색
					colorType[nn] = (colorType[n] + 1) % 2;
					// 재귀 호출
					dfs(nn, adj, visited, colorType, isGraph);
			} else if (colorType[n] === colorType[nn]) {
					// 같은 그룹이면 이분 그래프가 아님
					isGraph.value = false; // 객체의 프로퍼티로 값을 변경
					return; // 탐색 종료
			}
	}
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "./1707.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");
// 이분그래프란 무조건 간선이 다른 그룹과 연결되어야 함
const K = parseInt(input[0]);

let idx = 1;
// 각 테스트가 이분 그래프인지 확인
for (let t = 0; t < K; t++) {
	const [V, E] = input[idx].split(" ").map(Number);
	idx++;
	const adjList = Array(V + 1)
			.fill()
			.map(() => []);
	const visited = Array(V + 1).fill(false);
	const colorType = Array(V + 1).fill(0);
	
	let isGraph = { value: true }; // 객체로 wrapping하여 상태를 전달

	for (let i = 0; i < E; i++) {
			const [s, e] = input[idx].split(" ").map(Number);
			idx++;
			adjList[s].push(e);
			adjList[e].push(s);
	}

	for (let v = 1; v <= V; v++) {
			if (!visited[v]) {
					dfs(v, adjList, visited, colorType, isGraph); // isGraph 객체 전달

					if (!isGraph.value) { // 이분 그래프가 아니면 "NO"로 설정하고 반복 종료
							break;
					}
			}
	}
	
	console.log(isGraph.value ? "YES" : "NO");
}
