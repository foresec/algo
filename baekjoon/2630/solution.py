// [문제 링크]: https://www.acmicpc.net/problem/2630

def f1(y, x, N):
    global B
    global W
    color = board[y][x]
    for i in range(y, y + N):
        for j in range(x, x + N):
            if color != board[i][j]:
                f1(y, x, N // 2)
                f1(y, x + N // 2, N // 2)
                f1(y + N//2, x, N//2)
                f1(y + N//2, x + N//2, N//2)
                return
                
    if color == 0:              # 측정된 색이 0이라면 W에 카운트
        W += 1
    else:                       # 1이라면 B에 카운트
        B += 1
​
​
N = int(input())
board = [list(map(int, input().split())) for _ in range(N)]
B = 0 
W = 0
f1(0,0,N)
​
print(W)
print(B)