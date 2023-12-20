// [문제 링크]: https://www.acmicpc.net/problem/1193

import sys
input = sys.stdin.readline
​
N = int(input())
​
max_val = 1
total = 0
​
for i in range(1, 10000000):
    total += i
    max_val = i
    if total >= N:
        break
​
diff = total - N
​
if max_val % 2 == 0:
    print(f"{max_val - diff}/{diff + 1}")
else:
    print(f"{diff + 1}/{max_val - diff}")
​