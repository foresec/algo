// [문제 링크]: https://www.acmicpc.net/problem/2669

N = 101
arr = [[0] * N for _ in range(N)]
​
for _ in range(4):
    a, b, c, d = map(int, input().split())
​
    for i in range(a, c):
        for j in range(b, d):
            arr[i][j] += 1
​
result = 0
for x in range(N):
    for y in range(N):
        if arr[x][y] >= 1:
            result += 1
​
            
print(result)
​