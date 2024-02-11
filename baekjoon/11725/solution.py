// [문제 링크]: https://www.acmicpc.net/problem/11725

from collections import deque
​
​
def f(v):
    q = deque()
    q.append(v)
​
    while q:
        v = q.popleft()
        for w in adjlist[v]:
            if Pa[w] == 0:
                Pa[w] = v
                q.append(w)
​
N = int(input())
​
adjlist = [[] for _ in range(N+1)]
Pa = [0] * (N+1)
​
for _ in range(N-1):
    s, e = map(int, input().split())
    adjlist[s].append(e)
    adjlist[e].append(s)
​
f(1)
​
for i in range(2, N + 1):
    print(Pa[i])
    