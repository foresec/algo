// [문제 링크]: https://www.acmicpc.net/problem/2563

​
N = int(input())
arr = [[0] * 101 for _ in range(101)]
​
​
for k in range(N):
    a, b = map(int, input().split())
​
    for i in range(a, a + 10):
        for j in range(b, b + 10):
            arr[i][j] = 1
​
    result = 0
    for y in range(101):
        for x in range(101):
            if arr[y][x] == 1:
                result += 1
​
print(result)