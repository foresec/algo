// [문제 링크]: https://www.acmicpc.net/problem/1316

import sys
input = sys.stdin.readline
# 이어지지 않은 알파벳 재등장이 있으면 안됨
​
​
N = int(input())
​
ans = N
for _ in range(N):
    word = input()
    for i in range(1, len(word)):
        if word[i] != word[i-1] and word[i] in word[:i-1]:
            ans -= 1
            break
​
print(ans)