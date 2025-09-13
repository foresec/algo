import sys

input = sys.stdin.readline
from collections import deque


def bfs(n, val):
    q = deque([n])
    visited[n] = val

    while q:
        node = q.pop()
        for i in adj_list[node]:
            if visited[i] >= 1:
                continue
            q.append(i)
            visited[i] = val


N, M = map(int, input().split())

adj_list = [[] for _ in range(N + 1)]

for _ in range(M):
    u, v = map(int, input().split())
    adj_list[u].append(v)
    adj_list[v].append(u)


visited = [0] * (N + 1)

val = 0
for n in range(1, N + 1):
    if not visited[n]:
        val += 1
        bfs(n, val)

ans = len(set(visited)) - 1

print(ans)
