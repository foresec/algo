// [문제 링크]: https://www.acmicpc.net/problem/1874

import sys
​
input = sys.stdin.readline
​
​
cnt = 1
check = True
stack = []
ans = []
​
N = int(input())
​
for i in range(N):
    num = int(input())
​
    while cnt <= num:
        stack.append(cnt)
        ans.append("+")
        cnt += 1
​
    if stack[-1] == num:
        stack.pop()
        ans.append("-")
​
    else:
        check = False
        break
​
if check:
    for i in ans:
        print(i)
else:
    print("NO")
​