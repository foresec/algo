// [문제 링크]: https://www.acmicpc.net/problem/1940

N = int(input())
M = int(input())
arr = list(map(int, input().split()))
arr.sort()
ans = 0
​
# 양쪽 끝에서 시작해서 만날 때 까지
l = 0
r = N - 1
​
while l < r:
​
    if arr[l] + arr[r] == M:
        ans += 1
        l += 1
        r -= 1
​
    elif arr[l] + arr[r] > M:
        r -= 1
​
    elif arr[l] + arr[r] < M:
        l += 1
​
​
print(ans)
​