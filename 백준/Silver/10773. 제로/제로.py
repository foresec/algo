import sys
input = sys.stdin.readline


K = int(input())
nums = []

for _ in range(K):
    n = int(input())
    if n == 0 and nums:
        nums.pop()
    else:
        nums.append(n)

print(sum(nums))
  