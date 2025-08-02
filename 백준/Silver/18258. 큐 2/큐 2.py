import sys
from collections import deque

input = sys.stdin.readline

N = int(input())
q = deque([])

for _ in range(N):
    com = input().rstrip()
    if len(com) > 5:
        temp, b = com.split()
        X = int(b)
        q.append(X)

    elif com == "pop":
        if q:
            popped = q.popleft()
            print(popped)
        else:
            print(-1)
    elif com == "size":
        print(len(q))

    elif com == "empty":
        if q:
            print(0)
        else:
            print(1)

    elif com == "front":
        if q:
            print(q[0])
        else:
            print(-1)
    elif com == "back":
        if q:
            print(q[-1])
        else:
            print(-1)
