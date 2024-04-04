// [문제 링크]: https://www.acmicpc.net/problem/13023

import sys
sys.setrecursionlimit(100000)
input = sys.stdin.readline
​
def dfs(node, depth):
    global check
​
    if depth == 5:
        check = True
        return
    
    visited[node] = True
​
    for nn in adj[node]:
        if not visited[nn]:
            dfs(nn, depth+1)
            
    visited[node] = False
​
​
​
N, M = map(int, input().split())
adj = [[] for _ in range(N+1)]
​
for _ in range(M):
    a, b = map(int, input().split())
    adj[a].append(b)
    adj[b].append(a)
​
check = False
visited = [False] * (N+1)
​
for i in range(N):
    dfs(i, 1)
​
    if check:
        break
​
​
if check:
    print(1)
else:
    print(0)
​
​