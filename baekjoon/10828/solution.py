// [문제 링크]: https://www.acmicpc.net/problem/10828

import sys
input = sys.stdin.readline
​
N = int(input())
​
stack = []
​
for _ in range(N):
    comm = input()
    temp = comm[0:3]
    if temp == "pus":
        c, num = comm.split()
        stack.append(num)
    elif temp == "pop":
        if stack:
            print(stack.pop())
        else:
            print(-1)
    elif temp == "siz":
        print(len(stack))
    elif temp == "emp":
        if stack:
            print(0)
        else:
            print(1)
    else:
        if stack:
            print(stack[-1])
        else:
            print(-1)
​