dx = [1, 0, -1, 0]
dy = [0, -1, 0, 1]

from collections import deque


def bfs(q):
    
    while q:
        x, y, val = q.popleft()
        for d in range(4):

            nx = x + dx[d]
            ny = y + dy[d]

            if nx < 0 or nx >= N or ny < 0 or ny >= M:
                continue

            if arr[nx][ny] == 0:
                arr[nx][ny] = val + 1
                q.append((nx, ny, val + 1))


# 토마토가 모두 익을 때까지의 최소 날짜
# 토마토가 모두 익을 수 없다면 -1
M, N = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(N)]

ans = 0

active = deque()
for i in range(N):
    for j in range(M):
        if arr[i][j] == 1:
            active.append((i, j, 1))

bfs(active)

for i in range(N):
    for j in range(M):
        ans = max(ans, arr[i][j])
        if arr[i][j] == 0:
            print(-1)
            exit(0)

print(ans - 1)
