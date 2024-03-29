// [문제 링크]: https://www.acmicpc.net/problem/9655

N = int(input())
ans =""
# 1:s, 2: c, 3: s, 4: c, 5:,
if N % 2:
    ans = "SK"
else:
    ans = "CY"
​
print(ans)
​