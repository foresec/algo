// [문제 링크]: https://www.acmicpc.net/problem/7568

N = int(input())
arr = [list(map(int, input().split())) for _ in range(N)]
​
for a in arr:
    cnt = 1             # 0번째는 없음
    for b in arr:
        if a[0] < b[0] and a[1] < b[1]:
            cnt += 1    # a(변수)보다 큰 사람이 있으면 cnt
    print(cnt, end=" ")
    