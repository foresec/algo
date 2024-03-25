// [문제 링크]: https://www.acmicpc.net/problem/2193

import sys
input = sys.stdin.readline
​
N = int(input())
dp = [0] * (N + 1)
​
if N == 1 or N == 2:
    print(1)
​
else:
​
    dp[1] = 1 # 1
    dp[2] = 1 # 10
    # dp[3] = 100, 101  2
    # dp[4] = 1000, 1001, 1010   3
    # dp[5] = 10000, 10001, 10010, 10100, 10101  5
​
    for i in range(3, N + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
​
    print(dp[N])
​