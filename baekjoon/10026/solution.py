// [문제 링크]: https://www.acmicpc.net/problem/10026

# bfs로 풀이
​
dx = [1, 0, -1, 0]
dy = [0, -1, 0, 1]
​
def bfs(y, x):
    q.append((y, x))
    visited[y][x] = 1
​
    while q:
        b, a = q.pop(0)
        # 네 방향 탐색
        for i in range(4):
            ny = b + dx[i]
            nx = a + dy[i]
            if 0 <= nx < N and 0 <= ny < N and visited[ny][nx] == 0: 
                if arr[y][x] == arr[ny][nx]:
                    visited[ny][nx] = 1
                    q.append((ny, nx))
​
​
def c_bfs(y, x):
    q.append((y, x))
    visited2[y][x] = 1
​
    while q:
        b, a = q.pop(0)
        # 네 방향 탐색
        for i in range(4):
            ny = b + dx[i]
            nx = a + dy[i]
            if 0 <= nx < N and 0 <= ny < N and visited2[ny][nx] == 0: 
                if arr[y][x] == arr[ny][nx]:
                    visited2[ny][nx] = 1
                    q.append((ny, nx))
​
​
​
N = int(input())
arr = [list(input()) for _ in range(N)]
visited = [[0] * N for _ in range(N)]
q = []
​
​
cnt = 0
for i in range(N):
    for j in range(N):
        if visited[i][j] == 0:
            bfs(i, j)
            cnt += 1
​
# 적록 색맹일 때,
for i in range(N):
    for j in range(N):
        if arr[i][j] == 'G':
            arr[i][j] = 'R'
​
​
visited2 = [[0] * N for _ in range(N)]
​
cnt2 = 0
for i in range(N):
    for j in range(N):
        if visited2[i][j] == 0:
            c_bfs(i, j)
            cnt2 += 1
            
            
print(cnt, cnt2)
​