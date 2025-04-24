def count_diff(arr, x, y, alpha):
    a = alpha

    diff = 0
    for i in range(x, x + 8):
        for j in range(y, y + 8):
            if arr[i][j] != a:
                diff += 1
            
            a = "B" if a== "W" else "W"
    
        a = "B" if a =="W" else "W"
    return diff


N, M = map(int, input().split())

board = []
for n in range(N):
    row = input()
    board.append(row)

check = [[0] * M for _ in range(N)]


cnt = float("inf")
for i in range(N - 7):
    for j in range(M - 7):

        cnt1 = count_diff(board, i, j, "W")
        cnt2 = count_diff(board, i, j, "B")

        cnt = min(cnt, cnt1, cnt2)

print(cnt)