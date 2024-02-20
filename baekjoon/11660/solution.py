// [문제 링크]: https://www.acmicpc.net/problem/11660

import sys
input = sys.stdin.readline
​
N, M = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(N)]
​
temp = [[0] * (N + 1) for _ in range(N + 1)]
​
for i in range(N):
    for j in range(N):
        temp[i + 1][j + 1] = temp[i][j + 1] + temp[i + 1][j] - temp[i][j] + arr[i][j]
​
for _ in range(M):
    x1, y1, x2, y2 = map(int, input().split())
    ans = temp[x2][y2] - temp[x1 - 1][y2] - temp[x2][y1 - 1] + temp[x1 - 1][y1 - 1]
    print(ans)
​