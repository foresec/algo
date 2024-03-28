// [문제 링크]: https://www.acmicpc.net/problem/1012

from collections import deque
​
# 3. bfs(deque)
​
def bfs(y, x):
    q = deque([])
    q.append((y, x))    # 튜플 형태
    dx = [1, 0, -1, 0]
    dy = [0, -1, 0, 1]
​
    while q:            
        # q가 비어있을 때 끝남
        start = q.popleft()
        # 네 방향 탐색
        for i in range(4):
            ny = start[0] + dx[i]
            nx = start[1] + dy[i]
            if 0 <= nx < M and 0 <= ny < N: 
                if cfield[ny][nx] == 1:
                    cfield[ny][nx] = 0
                    q.append((ny, nx))
​
​
​
​
T = int(input())
​
for tc in range(1, T + 1):
    M, N, K = map(int, input().split())
    # X, Y : 배추가 심어진 위치
​
    cfield = [[0] * M for _ in range(N)]
​
    # 배추 위치에 1 표시
    for k in range(K):
        X, Y = map(int, input().split())
        cfield[Y][X] = 1
​
    cnt = 0
    for i in range(N):
        for j in range(M):
            if cfield[i][j] == 1:
                bfs(i, j)
                cnt += 1
​
    print(cnt)
​