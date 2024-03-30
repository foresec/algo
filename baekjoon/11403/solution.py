// [문제 링크]: https://www.acmicpc.net/problem/11403

import sys
input = sys.stdin.readline
​
N = int(input())
adj_list = [[0 for j in range(N)] for _ in range(N)]
​
for i in range(N):
    adj_list[i] = list(map(int, input().split()))
​
​
for k in range(N):
    for i in range(N):
        for j in range(N):
            if adj_list[i][k] and adj_list[k][j]:
                adj_list[i][j] = 1
​
for i in range(N):
    print(*adj_list[i])