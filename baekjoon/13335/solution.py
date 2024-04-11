// [문제 링크]: https://www.acmicpc.net/problem/13335

import sys
input = sys.stdin.readline
from collections import deque
​
n, w, L = map(int, input().split())
arr = list(map(int, input().split()))
​
trucks = deque(arr)
​
time = 0
bridge = deque([0] * w)
weight = 0
​
while trucks or weight > 0:
    time += 1
    
    if bridge:
        weight -= bridge.popleft()
        
    if trucks and weight + trucks[0] <= L:
        truck = trucks.popleft()
        bridge.append(truck)
        weight += truck
        
    else:
        bridge.append(0)
        
        
print(time)
​