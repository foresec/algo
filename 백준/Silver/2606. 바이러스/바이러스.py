def dfs(n):
    visited[n] = True

    for nb in adj_list[n]:
        if not visited[nb]:
            visited[n] = True
            dfs(nb)


N = int(input())
E = int(input())
adj_list = [[] * (N + 1) for _ in range(N + 1)]

for _ in range(E):
    s, e = map(int, input().split())
    adj_list[s].append(e)
    adj_list[e].append(s)


visited = [False] * (N + 1)
dfs(1)

print(visited.count(True)-1)
