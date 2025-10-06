from itertools import combinations
from collections import deque

import copy

dx = [1, 0, -1, 0]
dy = [0, -1, 0, 1]


def bfs(viruses, area):
    left_area = 0

    # 바이러스
    q = deque(viruses)

    while q:
        x, y = q.popleft()

        for d in range(4):
            nx = x + dx[d]
            ny = y + dy[d]

            if nx < 0 or nx >= N or ny < 0 or ny >= M:
                continue

            if area[nx][ny] == 0:
                area[nx][ny] = 2
                q.append((nx, ny))

    # 안전영역 갯수
    for i in range(N):
        for j in range(M):
            if area[i][j] == 0:
                left_area += 1
    return left_area


N, M = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(N)]

safety = []
viruses = []
for i in range(N):
    for j in range(M):
        if arr[i][j] == 0:
            safety.append((i, j))
        elif arr[i][j] == 2:
            viruses.append((i, j))
ans = 0

for combination in combinations(safety, 3):
    this_arr = copy.deepcopy(arr)
    for x, y in combination:
        this_arr[x][y] = 1

    val = bfs(viruses, this_arr)
    ans = max(ans, val)

print(ans)