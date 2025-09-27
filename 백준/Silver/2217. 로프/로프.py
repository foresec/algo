import sys

input = sys.stdin.readline

N = int(input())
ropes = []
for _ in range(N):
    temp = int(input())
    ropes.append(temp)


ropes.sort()
ans = 0


for i in range(N):
    temp = ropes[i] * (N - i)
    ans = max(ans, temp)

print(ans)
