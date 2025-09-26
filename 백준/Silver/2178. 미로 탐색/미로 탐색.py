from collections import deque

dx = [1, 0, -1, 0]
dy = [0, -1, 0, 1]


def bfs(x, y, arr):
    q = deque()
    q.append((x, y))

    while q:
        x, y = q.popleft()

        for d in range(4):
            nx = x + dx[d]
            ny = y + dy[d]

            if nx < 0 or ny < 0 or nx >= N or ny >= M:
                continue

            if arr[nx][ny] == 0:
                continue

            if arr[nx][ny] == 1:
                arr[nx][ny] = arr[x][y] + 1
                q.append((nx, ny))

    return arr


N, M = map(int, input().split())

arr = [list(map(int, input().strip())) for _ in range(N)]

arr = bfs(0, 0, arr)

print(arr[N - 1][M - 1])
