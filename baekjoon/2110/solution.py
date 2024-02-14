// [문제 링크]: https://www.acmicpc.net/problem/2110

import sys
input = sys.stdin.readline
​
N, C = map(int, input().split())
​
arr = [int(input()) for _ in range(N)]
arr.sort()
# 1,2,4,8,9
​
​
# 이분탐색
# 집 사이 간격이 x이상이 가능한 집의 수 = 공유기 수
​
dis = 0
​
# 거리의 값
left = 1
right = arr[-1] - arr[0]
​
ans = 0
​
while left <= right:
    mid = (left + right) // 2
​
    # 하나는 설치하고 시작
    cnt = 1
    first = arr[0]
​
    for i in range(1, N):
        if first + mid <= arr[i]:
            first = arr[i]
            cnt +=1
​
​
    # 공유기 갯수
    # -
    if cnt < C:
        right = mid - 1
​
    # +
    elif cnt >= C:
        left = mid + 1
        ans = mid
​
print(ans)
​