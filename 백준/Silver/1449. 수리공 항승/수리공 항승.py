N, L = map(int, input().split())
hole = list(map(int, input().split()))

hole.sort()


cnt = 0
cover = 0
for i in range(N):
    if cover < hole[i]:
        cnt += 1
        # 시작점 옮기기
        cover = hole[i] + L - 1

print(cnt)