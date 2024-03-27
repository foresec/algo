// [문제 링크]: https://www.acmicpc.net/problem/2217

import sys
input = sys.stdin.readline
​
# 모든 로프를 사용해야할 필요는 없다
N = int(input())
weight = [int(input()) for _ in range(N)]
​
weight.sort()
​
max_V = 0
for i in range(N):
    # 현재 로프 중량과 사용 로프의 개수를 곱하여 최대 중량 갱신
    rw = weight[i] * (N-i)
    if max_V < rw:
        max_V = rw
​
print(max_V)