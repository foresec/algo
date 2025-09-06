import sys
input = sys.stdin.readline


def calculate(arr):
    total = 0
    for i in range(1, len(arr)):
        temp = abs(arr[i - 1]-arr[i])
        total += temp
    return total


from itertools import permutations

N = int(input())
arr = list(map(int, input().split()))

max_val = 0
for perm in permutations(arr, N):
    val = calculate(perm)
    max_val = max(val, max_val)

print(max_val)
