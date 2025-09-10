import heapq
import sys

input = sys.stdin.readline


# 작은거부터 더해가면서누적

N = int(input())

arr = []
for _ in range(N):
    val = int(input())
    heapq.heappush(arr, val)

ans = 0

while len(arr) >= 2:
    min_v1 = heapq.heappop(arr)
    min_v2 = heapq.heappop(arr)
    cur_val = min_v1 + min_v2
    ans += cur_val

    heapq.heappush(arr, cur_val)


print(ans)
