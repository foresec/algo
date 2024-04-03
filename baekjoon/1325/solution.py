// [문제 링크]: https://www.acmicpc.net/problem/1325

import sys
​
input = sys.stdin.readline
from collections import deque
​
​
def hack(node):
    q = deque([node])
    visited = [False] * (V + 1)
    visited[node] = True
    cnt = 0
​
    while q:
        n = q.popleft()
        for nn in adj_list[n]:
            if not visited[nn]:
                q.append(nn)
                visited[nn] = True
                cnt += 1
​
    return cnt
​
​
V, E = map(int, input().split())
adj_list = [[] for _ in range(V + 1)]
​
for _ in range(E):
    s, e = map(int, input().split())
    adj_list[e].append(s)
​
​
ans = []
for i in range(1, V + 1):
    ans.append(hack(i))
​
max_v = max(ans)
for i in range(len(ans)):
    if max_v == ans[i]:
        print(i + 1, end=" ")
​