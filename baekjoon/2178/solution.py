// [문제 링크]: https://www.acmicpc.net/problem/2178

from collections import deque
import sys
​
input = sys.stdin.readline
​
dx = [1, 0, -1, 0]
dy = [0, -1, 0, 1]
​
N, M = map(int, input().split())
arr = [list(map(int, input().rstrip())) for _ in range(N)]
​
​
visited = [[False] * M for _ in range(N)]
visited[0][0] = True
q = deque()
q.append([0, 0, 1])
​
while q:
    x, y, dis = q.popleft()
​
    if x == N - 1 and y == M - 1:
        print(dis)
​
    for d in range(4):
        nx = x + dx[d]
        ny = y + dy[d]
        if 0 <= nx < N and 0 <= ny < M:
            if arr[nx][ny] == 1 and not visited[nx][ny]:
                q.append([nx, ny, dis + 1])
                visited[nx][ny] = True
​