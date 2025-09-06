import sys
input = sys.stdin.readline

T = int(input())

for _ in range(T):
    N, M = map(int, input().split())
    A = sorted(list(map(int, input().split())), reverse=True)
    B = sorted(list(map(int, input().split())), reverse=True)

    # 8 7 3 1 1
    # 6 3 1
    cnt = 0

    a = 0
    b = 0

    while a <N and b < M:

        if A[a] > B[b]:
            cnt += M - b
            b = 0
            a += 1

        elif A[a] <= B[b]:
            b += 1
   

    print(cnt)
