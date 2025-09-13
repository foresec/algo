import sys
from collections import deque

input = sys.stdin.readline


def rotate_gears(gears, num, direction):
    """주어진 톱니(num, 방향) 기준으로 좌우 전파를 체크하고 회전"""
    need_change = [0, 0, 0, 0]
    need_change[num] = direction

    # 왼쪽 전파
    d = direction
    for i in range(num - 1, -1, -1):
        if gears[i][2] != gears[i + 1][6]:
            d *= -1
            need_change[i] = d
        else:
            break

    # 오른쪽 전파
    d = direction
    for i in range(num + 1, 4):
        if gears[i - 1][2] != gears[i][6]:
            d *= -1
            need_change[i] = d
        else:
            break

    # 실제 회전
    for i in range(4):
        if need_change[i] != 0:
            gears[i].rotate(need_change[i])


def calc_score(gears):
    """톱니바퀴의 최종 점수를 계산"""
    score = 0
    for i in range(4):
        if gears[i][0] == "1":  # 12시 방향
            score += 2**i  # 2^i
    return score


# --- 실행 부분 ---
gears = [deque(input().strip()) for _ in range(4)]
K = int(input())

for _ in range(K):
    num, direction = map(int, input().split())
    rotate_gears(gears, num - 1, direction)

print(calc_score(gears))
