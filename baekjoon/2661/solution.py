// [문제 링크]: https://www.acmicpc.net/problem/2661

N = int(input())
​
def f1(ans, cnt):
    
    # 나쁜 수열의 조건
    for i in range(1, cnt // 2 + 1):
        if str(ans)[cnt - i:] == str(ans)[cnt - 2 * i : cnt - i]:
            return
​
    # 수열의 길이만큼 도달하면 끝         
    if cnt == N:
        print(ans)
        exit()
​
​
    for j in [1, 2, 3]:
        num = ans * 10 + j
        f1(num, cnt + 1)
​
f1(1, 1)