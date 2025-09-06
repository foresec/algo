import sys

input = sys.stdin.readline

N, M = map(int, input().split())
arr = list(map(int, input().split()))

start, end = 0, 0
sum_val = arr[0]
ans = 0


while True:
    if sum_val == M:
        ans += 1

    # 업데이트
    if sum_val >= M:
        start += 1
        sum_val -= arr[start - 1]
    else:
        if end == N - 1:
            break
        end += 1
        sum_val += arr[end]

print(ans)
