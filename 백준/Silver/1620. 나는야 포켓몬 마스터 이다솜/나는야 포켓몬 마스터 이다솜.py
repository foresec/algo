
import sys
input = sys.stdin.readline
N, M = map(int, input().split())
dict = {}

for i in range(N):
    val = input().strip()
    dict[val] = i + 1

for j in range(M):
    q = input().strip()

    if not q.isdigit():
        print(dict[q])
    else:

        q = int(q)
        for k, v in dict.items():

            if v == q:
                print(k)
                break
