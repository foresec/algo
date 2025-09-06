import sys
input = sys.stdin.readline


from itertools import combinations

people = []
for _ in range(9):
    d = int(input())
    people.append(d)

ans = []
for comb in combinations(people, 7):
    if sum(comb) == 100:
        ans = list(comb)
        ans.sort()
        for a in ans:
            print(a)
        break
