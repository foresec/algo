// [문제 링크]: https://www.acmicpc.net/problem/15686

import sys
from itertools import combinations
​
N, M = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(N)]
​
home = []
store = []
​
# 리스트에 각 좌표값 저장
for i in range(N):
    for j in range(N):
        if arr[i][j] == 1:
            home.append([i, j])
        if arr[i][j] == 2:
            store.append([i, j])
​
# 조건에 맞는 치킨집 조합 구하기
​
s_comb = list(combinations(store, M))
# [([0, 1], [3, 0]), ([0, 1], [4, 0]), ([0, 1], [4, 1]), ~]
​
​
# 도시의 치킨 거리 찾기
ans2 = 99999999
for s in s_comb:
    ans = 0                         # 도시의 치킨거리(합친 값 비교해서 최솟값)
    for h in home:
        min_length = 99999999       # 특정 치킨집과 집마다의 치킨거리
        for m in range(M):
            ch_length = abs(h[0] - s[m][0]) + abs(h[1] - s[m][1])
            min_length = min(min_length, ch_length)
        
        ans += min_length           # 각 치킨거리의 최솟값을 ans에 더하기
    ans2 = min(ans2, ans)
​
print(ans2)