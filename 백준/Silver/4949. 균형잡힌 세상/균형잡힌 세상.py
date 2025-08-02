import sys
input = sys.stdin.readline

dict = {")": "(", "]": "["}

while True:
    s = input().rstrip()
    if s == ".":
        break

    stack = []
    ans = "yes"

    for alpha in s:
        if alpha in ["(", "["]:
            stack.append(alpha)
        elif alpha in [")", "]"]:
            if stack and dict[alpha] == stack[-1]:
                stack.pop(-1)
            else:
                ans = "no"
                break

    if stack:
        ans = "no"

    print(ans)