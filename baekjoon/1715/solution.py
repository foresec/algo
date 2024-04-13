// [문제 링크]: https://www.acmicpc.net/problem/1715

import sys
input = sys.stdin.readline
​
import heapq
​
N = int(input())
​
arr = [int(input()) for _ in range(N)]
​
heap =[]
ans = 0
​
for num in arr:
    heapq.heappush(heap, num)
    
while len(heap) >= 2:
    a = heapq.heappop(heap)
    b = heapq.heappop(heap)
    heapq.heappush(heap, a+b)
    ans += a + b
​
print(ans)
​
​
​