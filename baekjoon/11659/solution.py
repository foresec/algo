// [문제 링크]: https://www.acmicpc.net/problem/11659

import sys
input = sys.stdin.readline
​
N, M = map(int, input().split())
arr = list(map(int, input().split()))
​
temp = [0] * (N + 1)
​
for i in range(N):
    temp[i + 1] = temp[i] + arr[i]
​
for _ in range(M):
​
    a, b = map(int, input().split())
    s = a - 1
    e = b - 1
​
    ans = temp[e + 1] - temp[s]
    print(ans)
​