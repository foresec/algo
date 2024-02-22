// [문제 링크]: https://www.acmicpc.net/problem/11724

import sys
input = sys.stdin.readline
from collections import deque
​
def bfs(i):
    visited[i] = True
    q = deque()
    q.append(i)
​
    while q:
        v = q.popleft()
        for v2 in graph[v]:
            if visited[v2] == False:
                visited[v2] = True
                q.append(v2)
​
N, M = map(int, sys.stdin.readline().split())
graph = [[] for _ in range(N+1)]
visited = [False] * (N+1)
​
for i in range(M):
    s, e = map(int, sys.stdin.readline().split())
    graph[s].append(e)
    graph[e].append(s)
​
cnt = 0
​
for i in range(1, N+1):
    if visited[i] == False:
        bfs(i)
        cnt += 1
print(cnt)
​