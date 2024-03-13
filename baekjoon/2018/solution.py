// [문제 링크]: https://www.acmicpc.net/problem/2018

import sys
input = sys.stdin.readline
​
N = int(input())
ans = 1
​
# 숫자리스트를 따로 만들 필요 없이 상수로 시작
s = 1
e = 1
temp = 1
​
while e < N:
​
    if temp == N:
        # count를 올려줌
        ans += 1
​
        temp -= s
        s += 1
​
    elif temp < N:
        e += 1
        temp += e
​
    elif temp > N:
        temp -= s
        s += 1
​
print(ans)