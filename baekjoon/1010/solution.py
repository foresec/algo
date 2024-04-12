// [문제 링크]: https://www.acmicpc.net/problem/1010

import sys
​
input = sys.stdin.readline
​
T = int(input())
​
dp = [[0] * 31 for _ in range(31)]
​
for i in range(31):
    dp[i][1] = i
    dp[i][0] = 1
    dp[i][i] = 1
​
​
for i in range(2, 31):
    for j in range(1, i):
        dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1]
​
for _ in range(T):
    N, M = map(int, input().split())
    print(dp[M][N])
​