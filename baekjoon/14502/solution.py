// [문제 링크]: https://www.acmicpc.net/problem/14502

import sys, copy
input = sys.stdin.readline
​
from itertools import combinations
from collections import deque
​
​
dx = [1, 0, -1, 0]
dy = [0, -1, 0, 1]
​
def bfs(i, j, visited, arr):
    visited[i][j] = True
    q = deque([(i, j)])
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
            if arr[nx][ny] == 0 and not visited[nx][ny]:
                q.append((nx, ny))
                visited[nx][ny] = True
                arr[nx][ny] = 2
​
    
    
​
N, M = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(N)]
​
empty = []
for i in range(N):
    for j in range(M):
        if arr[i][j] == 0:
            empty.append([i, j])
​
​
​
ans = 0
​
for comb in combinations(empty, 3):
    # check_arr = copy.deepcopy(arr)
    # 아래와 같이 하면 시간이 반으로 줄음
    check_arr = [row[:] for row in arr]
    cnt = 0
​
    for i, j in comb:
        # check_arr에 조합의 수에 해당하는 벽 세우기
        check_arr[i][j] = 1
        
    visited = [[False] * M for _ in range(N)]
​
    for i in range(N):
        for j in range(M):
            # check_arr의 바이러스를 찾아서 bfs로 퍼지도록
            # 단, 2로 바꾼 후 다시 중복체크 되지 않도록 visited로 조건을 한번 더 걸어줌
            if check_arr[i][j] == 2 and not visited[i][j]:
                bfs(i, j, visited, check_arr)
    
    
    for i in range(N):
        for j in range(M):
            # 안전구역 카운트
            if check_arr[i][j] == 0:
                cnt += 1
​
​
    ans = max(ans, cnt)
​
print(ans)