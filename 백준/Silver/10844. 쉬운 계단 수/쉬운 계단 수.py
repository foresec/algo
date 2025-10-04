N = int(input())


# 1->1,2,3,4,5,6,7,8,9 9
# 2-> 10, 12,23,34,45,56,67,78,89/98,87,76,65,54,43,32,21, 17
# 3-> 101,121,123/ 210,212,232,234 32

# 10->101,
dp = [[0] * 10 for _ in range(N + 1)]


for j in range(1, 10):
    dp[1][j] = 1


for i in range(2, N + 1):
    for j in range(10):
        if j == 0:
            dp[i][j] = dp[i-1][1]
        elif j == 9:
            dp[i][j] = dp[i-1][8]
        else:
            dp[i][j] = dp[i-1][j-1] + dp[i-1][j+1]

        dp[i][j] %= 1000000000
        

print(sum(dp[N])% 1000000000)
