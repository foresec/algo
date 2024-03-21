// [문제 링크]: https://www.acmicpc.net/problem/1253

import sys
input = sys.stdin.readline
​
# 어떤 수가 다른 수 두개의 합으로 나타날 수 있을 때
# 이 때, 어떤 수에는 음수도 포함됨
N = int(input())
arr = list(map(int, input().split()))
arr.sort()
ans = 0
​
​
​
# for문으로 하나씩 검사
for i in range(N):
    sum_num = arr[i]
    l = 0
    r = N - 1
​
    while l < r:
​
        temp = arr[l] + arr[r]
​
        if temp == sum_num:
​
            if l == i:
                l += 1
​
            elif r == i:
                r -= 1
​
            else:
                ans += 1
                break
​
        elif temp < sum_num:
            l += 1
​
        else:
            r -= 1
​
        
print(ans)
​