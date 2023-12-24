// [문제 링크]: https://www.acmicpc.net/problem/7576

import sys
from collections import deque
​
input = sys.stdin.readline
​
dx = [1, 0, -1, 0]
dy = [0, -1, 0, 1]
​
​
def bfs(tom):
    q = deque(tom)
​
    while q:
        x, y = q.popleft()
​
        for d in range(4):
            nx = x + dx[d]
            ny = y + dy[d]
​
            if not (0 <= nx < N and 0 <= ny < M):
                continue
​
            # 익지 않은 토마토이고, 방문한적 없다면
            if arr[nx][ny] == 0 and not visited[nx][ny]:
                q.append((nx, ny))
                visited[nx][ny] = visited[x][y] + 1
​
​
M, N = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(N)]
visited = [[0] * M for _ in range(N)]
ans = 0
​
tomato = []
for i in range(N):
    for j in range(M):
        if arr[i][j] == 1:
            tomato.append((i, j))
            visited[i][j] = 1
​
bfs(tomato)
ans = max(max(row) for row in visited)
​
​
# 안익은 사과가 남아있는지 탐색
for i in range(N):
    for j in range(M):
        # 안익은 사과이면서 방문한적도 없다면(방문한적 없다 = 벽이거나, 벽에 가로막힌 사과 포함)
        if arr[i][j] == 0 and visited[i][j] == 0:
            print(-1)
            sys.exit(0)
​
print(ans - 1)
​