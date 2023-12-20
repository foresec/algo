// [문제 링크]: https://www.acmicpc.net/problem/2941

import sys
input = sys.stdin.readline
​
cro = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="]
​
word = input().rstrip()
ans = 0
​
for c in cro:
    ans += word.count(c)
​
print(len(word) - ans)