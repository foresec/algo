import sys
input = sys.stdin.readline
N = int(input())

num = 225 * [0]

for i in range(1, 225):
    num[i] = i * i



dp = [50000] * (N+1)
dp[0]= 0

for i in range(1, N+1) :
    for n in num:
        if n > i:
            break
        dp[i] = min(dp[i], dp[i-n]+1)

print(dp[N])
