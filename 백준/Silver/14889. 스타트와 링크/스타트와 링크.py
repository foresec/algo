from itertools import combinations

import sys
input = sys.stdin.readline

def check_ability(team, arr):
    total = 0
    for i, j in combinations(team,2):
        total += arr[i][j] + arr[j][i]
    return total

N = int(input())
arr = [list(map(int, input().split())) for _ in range(N)]

# 두팀으로 나누었을 때 가장 차이가 적게
nums = range(N)
team = list(combinations(nums, N//2))

ans = float('inf')

for i in range(len(team) // 2):
    a = team[i]
    b = list(set(nums)- set(team[i]))
    a_val = check_ability(a, arr)
    b_val = check_ability(b, arr)
    ans = min(ans, abs(a_val - b_val))
    if ans == 0:
        break

print(ans)