# 이분탐색의 중요한점
# 1. left~right 범위설정
# 2. mid값은 항상 씀
# 3. 조건에 맞는 풀이 후
# 4. 3에서 만들어낸 값으로 판단하여 mid값을 어떻게 right나 left에 업데이트할지 결정


import sys

input = sys.stdin.readline

N, M = map(int, input().split())
arr = list(map(int, input().split()))

left = max(arr)
right = sum(arr)

ans = 0

# 이분탐색
while left <= right:
    # mid = 임시 블루레이 용량 설정
    mid = (left + right) // 2

    # 현재 블루레이 갯수
    blueray_num = 1
    blueray_remain = mid

    for i in range(N):
        # 남아있는 용량이 없다면
        if blueray_remain < arr[i]:
            # 다음 블루레이로 셋팅
            blueray_num += 1
            blueray_remain = mid

        # 블루레이 용량 차감
        blueray_remain -= arr[i]

    # 조건문
    # 임시값으로 나온 결과가 실제 가지고 있는 블루레이 갯수보다 적다면
    if blueray_num <= M:
        # 가능한 경우이긴하니까 ans 업데이트
        ans = mid
        # 영상시간을 더 줄일 수 있음
        right = mid - 1
    else:
        # 블루레이 갯수가 초과했으므로 하나의 블루레이 당 담을 영상시간을 늘려야함
        left = mid + 1

print(ans)
