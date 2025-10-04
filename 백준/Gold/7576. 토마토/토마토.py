
import sys
input = sys.stdin.readline

from collections import deque

dx = [1, 0, -1, 0]
dy = [0, -1, 0, 1]


def bfs(tom):
    q = deque(tom)
    day = 0

    while q:
        # 포인트는 포문으로 첫 시작점을 모두 돌려야 함
        for _ in range(len(q)):
            x, y, day = q.popleft()
                   
            for d in range(4):
                nx = x + dx[d]
                ny = y + dy[d]

                if not (0 <= nx < N and 0 <= ny < M):
                    continue

                if arr[nx][ny] == 0:
                    q.append((nx, ny, day + 1))
                    arr[nx][ny] = 1

    return day


M, N = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(N)]
ans = 0

tomato = []
for i in range(N):
    for j in range(M):
        # 토마토를 발견하면 익히기
        if arr[i][j] == 1:
            # 시작 시점은 day = 0
            tomato.append((i, j, 0))

ans = bfs(tomato)

for i in range(N):
    for j in range(M):
        if arr[i][j] == 0:
            ans = -1
            break
        

print(ans)