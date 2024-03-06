// [문제 링크]: https://www.acmicpc.net/problem/2141

import sys
input = sys.stdin.readline
​
N = int(input())
​
villages = [list(map(int, input().split())) for _ in range(N)]
villages.sort(key=lambda x: x[0])
​
total = 0
for v in villages:
    total += v[1]
​
# 인구수의 합이 절반 이상인 마을을 찾음
pop_sum = 0
​
for v in villages:
        pop_sum += v[1]
        if pop_sum >= total / 2:
                print(v[0])
                break