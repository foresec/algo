import sys

input = sys.stdin.readline

T = int(input())

for _ in range(T):
    N, M = map(int, input().split())
    A = sorted(list(map(int, input().split())))
    B = sorted(list(map(int, input().split())))

    cnt = 0
    a = 0
    b = 0

    while a < N:

        # 비교물고기 비교가 끝까지 간 경우
        if b == M:
            cnt += b
            a += 1
        else:
            # 기준물고기가 더 크면 다음으로
            if A[a] > B[b]:
                b += 1
            else:
                # 작거나 같다면 다음 기준물고기로 변경 및 계산한거 반영
                a += 1
                cnt += b

    print(cnt)
