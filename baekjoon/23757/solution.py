// [문제 링크]: https://www.acmicpc.net/problem/23757

import heapq
​
N, M = map(int, input().split())
​
presents = list(map(int, input().split()))
children = list(map(int, input().split()))
​
heaplist = []
​
for present in presents:
    heapq.heappush(heaplist, -present)
​
# print(heaplist)
flag = 1
for child in children:
    present = -heapq.heappop(heaplist)
    if child > present:
        flag = 0
        break
    heapq.heappush(heaplist, child - present)
​
print(flag)