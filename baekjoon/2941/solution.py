// [문제 링크]: https://www.acmicpc.net/problem/2941

import sys
input = sys.stdin.readline
​
cro = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="]
​
# 공백 제거 필요
word = input().rstrip()
​
ans = len(word)
idx = 0
​
​
while idx < len(word):
    check = False
​
    for j in range(idx + 1, idx + 4):
        w = word[idx:j]
        if w in cro:
            ans -= len(w) - 1
            idx += len(w)
            check = True
            break
        else:
            check = False
​
    if not check:
        idx += 1
​
​
print(ans)