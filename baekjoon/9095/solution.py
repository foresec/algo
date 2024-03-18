// [문제 링크]: https://www.acmicpc.net/problem/9095

dp = [0] * 11
dp[1] = 1
dp[2] = 2
dp[3] = 4
​
T = int(input())
for tc in range(1, T + 1):
    N = int(input())
  
    for i in range(4, N+1):
        dp[i] = dp[i-1] + dp[i-2] + dp[i-3]
​
    print(dp[N])