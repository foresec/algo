from collections import defaultdict

N, K = map(int, input().split())
arr = list(map(int, input().split()))


sum_arr = [0] * N
sum_arr[0] = arr[0]

for i in range(1, N):
    sum_arr[i] = sum_arr[i - 1] + arr[i]


ans = 0

pf_cnt = defaultdict(int)
pf_cnt[0] = 1


for i in range(N):

    # 1. 이전 기록 중 찾아야 하는 값 지정
    target = sum_arr[i] - K

    # 2. 이전 기록 중에 target이 있다면 그만큼 더해줌
    if target in pf_cnt:
        ans += pf_cnt[target]

    # 0. 존재하는 값을 죄다 기록
    pf_cnt[sum_arr[i]] += 1

print(ans)
