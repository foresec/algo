import sys

input = sys.stdin.readline
T = int(input())


for _ in range(T):
    N = int(input())
    total = [list(map(int, input().split())) for _ in range(N)]

    total.sort(key=lambda x: (x[0], x[1]))

    cnt = 1 
    min_interview = total[0][1]

    for i in range(1, N):
        if total[i][1] < min_interview:
            cnt += 1
            min_interview = total[i][1]

    print(cnt)
