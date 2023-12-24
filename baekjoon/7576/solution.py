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
            if arr[nx][ny] == 0:
                q.append((nx, ny))
                arr[nx][ny] = arr[x][y] + 1
​
​
M, N = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(N)]
ans = 0
​
tomato = []
for i in range(N):
    for j in range(M):
        if arr[i][j] == 1:
            tomato.append((i, j))
​
bfs(tomato)
ans = max(max(row) for row in arr)
​
# 안익은 토마토가 남아있는지 확인
for row in arr:
    if 0 in row:
        print(-1)
        sys.exit(0)
​
print(ans - 1)
​