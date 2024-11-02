N, K = map(int, input().split())
dp = [0] * (K + 1)                         # dp를 무게 기준으로 잡음

for _ in range(N):
    W, V = map(int, input().split())
    for i in range(K, W - 1, -1):          # 최대에서 최소 방향
        dp[i] = max(dp[i], dp[i-W] + V)    # 이번 값, 바로 전 값(W 는 이번 무게) + 가치

print(dp[-1])