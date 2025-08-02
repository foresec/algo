import sys
from collections import deque

input = sys.stdin.readline

N = int(input())
arr = deque(range(1, N + 1))
while len(arr) > 2:
    arr.popleft()
    arr.rotate(-1)

if len(arr) == 2:
    arr.popleft()

print(arr[0])