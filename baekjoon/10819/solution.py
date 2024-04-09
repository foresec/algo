// [문제 링크]: https://www.acmicpc.net/problem/10819

from itertools import permutations
​
N = int(input())
arr = list(map(int, input().split()))
​
ans = 0
​
temp = permutations(arr, N)
​
for i in temp:
    total = 0
    for j in range(N-1):
        total += abs(i[j] - i[j+1])
    ans = max(total, ans)
​
print(ans)
​