def dfs():
    stack = [1]
    visited[1] = True

    while stack:
        node = stack.pop()
        for nn in adj_list[node]:
            if visited[nn]:
                continue
            visited[nn] = True
            # 부모 기록
            parents[nn] = node
            stack.append(nn)


import sys

input = sys.stdin.readline
N = int(input())
adj_list = [[] for _ in range(N + 1)]

for _ in range(N - 1):
    a, b = map(int, input().split())
    adj_list[a].append(b)
    adj_list[b].append(a)

parents = [-1] * (N + 1)
visited = [False] * (N + 1)


dfs()

for i in range(2, N + 1):
    print(parents[i])
