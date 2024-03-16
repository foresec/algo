// [문제 링크]: https://www.acmicpc.net/problem/14940

import sys
input = sys.stdin.readline
from collections import deque
​
​
dx = [1, 0, -1, 0]
dy = [0, -1, 0, 1]
​
def bfs(i, j, cnt):
        q = deque()
        q.append((i, j, 0))
        cnt = 0
    
        while q:
                x, y, cnt = q.popleft()
                for d in range(4):
                        nx = x + dx[d]
                        ny = y + dy[d]
                        if 0 <= nx < N and 0 <= ny < M:
                                if arr[nx][ny] == 1 and visited[nx][ny] == 0:
                                        q.append((nx, ny, cnt+1))
                                        visited[nx][ny] = cnt+1
​
                                                
N, M = map(int, input().split())
​
arr = [list(map(int, input().split())) for _ in range(N)]
​
visited = [[0] * M for _ in range(N)]
​
for i in range(N):
    for j in range(M):
        if arr[i][j] == 2:
            bfs(i, j, 0)
            break       
​
​
for i in range(N):
    for j in range(M):
        if arr[i][j] == 1 and visited[i][j] == 0:
                        visited[i][j] = -1
​
​
for k in range(N):      
        print(*visited[k])