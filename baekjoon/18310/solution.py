// [문제 링크]: https://www.acmicpc.net/problem/18310

N = int(input())
houses = list(map(int, input().split()))
houses.sort()
print(houses[(N-1) // 2])