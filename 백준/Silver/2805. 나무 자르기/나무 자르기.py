# M개 이상이되, 최소한의 값을 가져가도록 자르는법


import sys

input = sys.stdin.readline
N, M = map(int, input().split())
trees = list(map(int, input().split()))

start = 0
end = max(trees)
ans = 0

while start <= end:
    mid = (start + end) // 2

    # 현재 높이(mid)에서 얻을 수있는 나무 높이
    now_val = 0
    for i in range(N):
        if trees[i] > mid:
            now_val += trees[i] - mid

    # 높이의 합이 M보다 크거나 같다면
    if now_val >= M:
        start = mid + 1
        ans = mid
    else:
        end = mid - 1

print(ans)
