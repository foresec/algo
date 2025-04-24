E, S, M = map(int, input().split())

# 16년
# E = 1 -> 1, 15+1, 30+1, 45+1
# S = 1 -> 1, 28+1, 56+1
# M = 1 -> 1, 19+1, 38+1

ans = 1

while True:

    if (ans - E) % 15 == 0 and (ans - S) % 28 == 0 and (ans - M) % 19 == 0:
        break
    ans += 1
print(ans)