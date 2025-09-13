N = int(input())
# 1/ 2 1/ 3 1/ 4 2 1/ 5 4 2 1/ 6 2 1/ 7 6 2 1 / 8 4 2 1 /
# 9 3 1/ 10 5 4 2 1->(10 9 3 1)

# 12 / 12 6 2 1 , 12 4 2 1,
dp = [0] * (max(N, 3) + 1)

dp[1] = 0
dp[2] = 1
dp[3] = 1


for i in range(4, N + 1):
    if i % 3 == 0 and i % 2 == 0:
        dp[i] = min(dp[i // 3], dp[i // 2], dp[i - 1]) + 1
    elif i % 3 == 0:
        dp[i] = min(dp[i // 3], dp[i - 1]) + 1
    elif i % 2 == 0:
        dp[i] = min(dp[i // 2], dp[i - 1]) + 1
    else:
        dp[i] = dp[i - 1] + 1

print(dp[N])
