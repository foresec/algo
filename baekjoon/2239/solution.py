// [문제 링크]: https://www.acmicpc.net/problem/2239

import sys
input = sys.stdin.readline
​
def Row(x, num):
    for i in range(9):
        if num == arr[x][i]:
            return False        # row 내에 해당 num이 있다면 False반환   
    return True                 # row 내에 해당 num이 없다면 True 반환
​
def Col(y, num):
    for i in range(9):
        if num == arr[i][y]:
            return False
    return True
​
def Squ(x, y, num):             # 9개의 네모 중 중 어느 네모에 속해있는지 판단 먼저
    nx = x // 3 * 3             # (0~2) : 0, (3~5) : 1, (6~8) : 2
    ny = y // 3 * 3
​
    for i in range(3):
        for j in range(3):
            if num == arr[nx+i][ny+j]:
                return False
    return True
​
​
​
def dfs(idx):
    if idx == len(zero):        # zero(0인 좌표들)의 갯수에 도달할 때까지 재귀
        for i in range(9):
            print(''.join(map(str, arr[i])))      # 완성된 arr을 print
        sys.exit(0)                 # python 코드 종료
​
    for i in range(1, 10):      # 0 좌표들
​
        x = zero[idx][0]
        y = zero[idx][1]
​
        if Row(x, i) and Col(y, i) and Squ(x, y, i):    # i가 세군데 모두에서 없는 숫자면
            arr[x][y] = i                               # 그 자리에 i 대입
            dfs(idx + 1)                                # 다음 0좌표
            arr[x][y] = 0                               # 백트래킹 시 필요한 초기화 과정
​
​
arr = [list(map(int, input().strip())) for _ in range(9)]
zero = []
​
# 0인 좌표를 모두 수집
for i in range(9):
    for j in range(9):
        if arr[i][j] == 0:
            zero.append((i, j))
​
dfs(0)
​