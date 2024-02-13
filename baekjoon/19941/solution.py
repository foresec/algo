// [문제 링크]: https://www.acmicpc.net/problem/19941

import sys
input = sys.stdin.readline
​
​
N, M = map(int, input().split())
​
arr = list(input().rstrip())
​
ans= 0
for i in range(N):
    if arr[i] == "P":
        for j in range(i - M, i + M + 1):
            if  0 <= j < N and arr[j] == "H":
                arr[j] = "N"
                ans += 1
                break
                
                                                              
print(ans)