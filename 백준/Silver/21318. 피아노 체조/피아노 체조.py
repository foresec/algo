import sys
input = sys.stdin.readline

N = int(input())
scores = list(map(int, input().split()))
Q = int(input())
queries = [list(map(int, input().split())) for _ in range(Q)]

mistakes = [0] * N
for i in range(N-1):
    if scores[i] > scores[i+1]:
        mistakes[i] = 1

prefix = [0] * (N+1)
for i in range(1, N+1):
    prefix[i] = prefix[i-1] + mistakes[i-1]

for x, y in queries:
    print(prefix[y-1] - prefix[x-1])
