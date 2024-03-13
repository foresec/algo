// [문제 링크]: https://www.acmicpc.net/problem/10986

import sys
input = sys.stdin.readline
​
N, M = map(int, input().split())
arr = list(map(int, input().split()))
ans = 0
total = 0
temp = arr[:]
​
# 나머지가 같은 수 저장
​
# 나머지가 같은 경우를 서로 빼면 나머지가 상쇄되므로 
# 문제에서 원하는 나누어떨어지는 구간이 만들어짐
check = [0] * M
​
for i in range(N):
    total += arr[i]
    temp[i] = total % M
    
    check[temp[i]] += 1
​
ans += check[0]
​
# 나머지가 같은 수가 2개 이상일때, 그중 2개를 뽑는 경우의 수
for num in check:
    if num >= 2:
        ans += (num * (num - 1)) // 2
​
print(ans)
​