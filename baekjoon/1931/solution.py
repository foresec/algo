// [문제 링크]: https://www.acmicpc.net/problem/1931

import sys
input = sys.stdin.readline
​
N = int(input())
arr = [list(map(int, input().split())) for _ in range(N)]
​
# 끝나는 시간, 시작시간 순으로 오름차순으로 정렬
arr.sort(key=lambda x: (x[1], x[0]))
​
​
# 끝나는 시간보다 시간
cnt = 1
now = arr[0][1]
for i in range(1, N):
    if now <= arr[i][0]:
        now = arr[i][1]
        cnt += 1
​
print(cnt)
​