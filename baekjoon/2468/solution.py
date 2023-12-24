// [문제 링크]: https://www.acmicpc.net/problem/2468

from collections import deque
import sys
input = sys.stdin.readline
​
dx = [1, 0, -1, 0]
dy = [0, -1, 0, 1]
​
​
def bfs(i, j, visited):
    q = deque()
    q.append((i, j))
​
    while q:
        x, y = q.popleft()
​
        for d in range(4):
            nx = x + dx[d]
            ny = y + dy[d]
​
            if 0 <= nx < N and 0 <= ny < N:
                if arr[nx][ny] > h and not visited[nx][ny]:
                    q.append((nx, ny))
                    visited[nx][ny] = True
​
​
# 비의 양에 따라 물에 잠기지 않는 안전한 영역의 개수 중 최대인 경우를 출력
N = int(input())
arr = [list(map(int, input().split())) for _ in range(N)]
​
​
# 최대 높이를 구해서
max_h = 0
for a in arr:
    if max(a) > max_h:
        max_h = max(a)
​
​
ans = 1
# 최대 높이까지 탐색하는 for문
for h in range(1, max_h):
    # 각 높이 이상일 경우에 탐색하여 구역나누기
    cnt = 0
    visited = [[False] * N for _ in range(N)]
    for i in range(N):
        for j in range(N):
            # 잠기지 않는 구역이 있을 때마다 cnt += 1
            if arr[i][j] > h and not visited[i][j]:
                visited[i][j] = True
                # 잠기지 않는 구역을 탐색 후 전부 잠긴 구역으로 바꾸기(탐색되지 않도록)
                bfs(i, j, visited)
                
                cnt += 1
​
    ans = max(cnt, ans)
​
​
print(ans)
​