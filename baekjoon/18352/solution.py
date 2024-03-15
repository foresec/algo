// [문제 링크]: https://www.acmicpc.net/problem/18352

import sys
from collections import deque
​
def bfs(x):
    q = deque()
    q.append(x)
    D[x] = 0                         # 시작점 0으로 초기화
​
    while q:
        x = q.popleft()
        for nx in graph[x]:
            if D[nx] == -1:          # 방문하지 않았다면
                D[nx] = D[x] + 1
                q.append(nx)
​
​
# 도시의 개수 N, 도로의 개수 M, 거리정보 K, 출발 도시의 번호 X
N, M, K, X = map(int, sys.stdin.readline().split())
INF = 9999999999
graph = [[] for _ in range(N + 1)]
​
for _ in range(M):
    s, e = map(int, sys.stdin.readline().split())
    graph[s].append(e)
​
D = [-1] * (N + 1)                  # 방문 및 거리 기록
​
bfs(X)
​
flag = 0
for i in range(1, N+1):
    if D[i] == K:
        flag = 1
        print(i)
​
if flag == 0:
    print(-1)
​