// [문제 링크]: https://www.acmicpc.net/problem/1707

import sys
input = sys.stdin.readline
sys.setrecursionlimit(100000)
​
import sys
input = sys.stdin.readline
​
def dfs(n):
    global total
    visited[n] = True
​
    for nn in adj[n]:
​
        if not visited[nn]:
            check[nn] = (check[n]+1) % 2
            dfs(nn)
​
        elif check[n] == check[nn]:
            total = False
​
K= int(input())
​
for _ in range(K):
​
    V, E = map(int, input().split())
    adj = [[ ] for _ in range(V + 1)]
    visited = [False]  * (V+1)
    check = [0] * (V+1)
    total = True
​
    for i in range(E):
        s, e = map(int, input().split())
        adj[s].append(e)
        adj[e].append(s)
    
​
    for i in range(1, V+1):
        if total:
            dfs(i)
           
        else:
            # 이분그래프가 아니게 될 경우 반복을 멈춤
            break
    
    if total:
        print("YES")
    else:
        print("NO")