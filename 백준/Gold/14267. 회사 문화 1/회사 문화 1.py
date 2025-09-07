import sys
input = sys.stdin.readline

N, M = map(int, input().split())
parents = list(map(int, input().split()))

for i in range(1, N):
    parents[i] -= 1

plus = [0] * N

for _ in range(M):
    i, w = map(int, input().split())
    plus[i - 1] += w


score = [0] * N
# 직속상사의 번호는 자신의 번호보다 작다는 전제조건이 있음
# => 즉, '왼쪽부터 탐색=부모순서부터 탐색'인 것이 핵심
# 부모로부터 받은 값 + 이번에 새로 더한값 계산으로 해결
for i in range(1, N):
    score[i] =score[parents[i]] + plus[i]


print(*score)
