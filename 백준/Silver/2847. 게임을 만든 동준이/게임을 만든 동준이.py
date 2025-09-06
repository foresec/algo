import sys

input = sys.stdin.readline


N = int(input())

arr = []
for _ in range(N):
    temp = int(input())
    arr.append(temp)

cnt = 0

for i in range(N - 1, 0, -1):

    if arr[i - 1] >= arr[i]:
        val = arr[i - 1] - arr[i] + 1
        arr[i - 1] -= val
        cnt += val

print(cnt)
