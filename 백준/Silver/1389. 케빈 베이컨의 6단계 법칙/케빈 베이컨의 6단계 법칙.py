import sys

input = sys.stdin.readline
from collections import deque


def bfs(n):
    q = deque([n])
    visited[n] = 1

    while q:
        node = q.popleft()
        for nn in adj_list[node]:
            if visited[nn]:
                continue
            visited[nn] = visited[node] + 1
            q.append(nn)


N, M = map(int, input().split())

adj_list = [[] for _ in range(N + 1)]

for _ in range(M):
    u, v = map(int, input().split())
    adj_list[u].append(v)
    adj_list[v].append(u)


cnt = 100000000000
ans = 0
for n in range(1, N + 1):
    # 노드마다 거리 탐색
    visited = [0] * (N + 1)
    bfs(n)
    # 각 노드마다 탐색을 마친 후 최소값을 가진 사람을 업데이트
    temp = sum(visited) - N
    if cnt > temp:
        cnt = temp
        ans = n

print(ans)
