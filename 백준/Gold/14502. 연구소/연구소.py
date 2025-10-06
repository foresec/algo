import sys
from itertools import combinations
from collections import deque

dx = [1, 0, -1, 0]
dy = [0, -1, 0, 1]

def dfs(i, j, visited, arr):
    stack = [(i, j)]
    visited[i][j] = True

    while stack:
        x, y = stack.pop()

        for d in range(4):
            nx, ny = x + dx[d], y + dy[d]

            if nx < 0 or ny < 0 or nx >= N or ny >= M:
                continue

            if arr[nx][ny] == 0 and not visited[nx][ny]:                
                stack.append((nx, ny))
                visited[nx][ny] = True
                arr[nx][ny] = 2

N, M = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(N)]

empty = [(i, j) for i in range(N) for j in range(M) if arr[i][j] == 0]

ans = 0

for comb in combinations(empty, 3):
    check_arr = [row[:] for row in arr]
    cnt = 0

    for i, j in comb:
        check_arr[i][j] = 1

    visited = [[False] * M for _ in range(N)]

    for i in range(N):
        for j in range(M):
            if check_arr[i][j] == 2 and not visited[i][j]:
                dfs(i, j, visited, check_arr)

    for i in range(N):
        for j in range(M):
            if check_arr[i][j] == 0:
                cnt += 1

    ans = max(ans, cnt)

print(ans)
