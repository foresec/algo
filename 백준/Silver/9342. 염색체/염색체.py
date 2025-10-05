# A->F->C 순서를 지켜야한다?
# 6중 1 or 0-> A->F->C -> 6중 1 or 0 ->끝

import sys

input = sys.stdin.readline

T = int(input())

ans = "Infected!"

alpha = ["A", "B", "C", "D", "E", "F"]


for _ in range(T):
    tc = input().rstrip()

    if len(tc) < 3:
        print("Good")
        continue

    if tc[0] != "A":
        if tc[0] not in alpha:
            print("Good")
            continue
        tc = tc[1:]

    if tc[-1] != "C":
        if tc[-1] not in alpha:
            print("Good")
            continue
        tc = tc[:-1]

    # A->F->C
    word = tc[0]
    for i in range(1, len(tc)):
        if tc[i] != tc[i - 1]:
            word += tc[i]

    if word == "AFC":
        print("Infected!")
    else:
        print("Good")
