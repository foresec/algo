// [문제 링크]: https://www.acmicpc.net/problem/2075

import sys
input = sys.stdin.readline
​
N = int(input())
​
arr = []
​
for i in range(N):
    arr += list(map(int, input().split()))
    # 최댓값 만큼 위에서 N개씩 자름  
    arr = sorted(arr, reverse=True)[:N]
​
​
print(arr[-1])