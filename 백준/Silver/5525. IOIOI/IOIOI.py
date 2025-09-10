import sys

input = sys.stdin.readline


N = int(input())
M = int(input())
S = input().rstrip()


cnt = 0
idx = 0
ans = 0

while idx < M - 2:

    if S[idx : idx + 3] == "IOI":
        cnt += 1
        if cnt >= N:
            ans += 1
        idx += 2
    else:
        cnt = 0
        idx += 1


print(ans)
