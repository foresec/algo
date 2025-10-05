import math, sys
input= sys.stdin.readline

def get_lcm(a, b):
    if a == 0 or b == 0:
        return 0
    return a * b // math.gcd(a, b)


T = int(input())
for _ in range(T):
    M, N, x, y = map(int, input().split())
    ans = -1

    limit = get_lcm(M, N)
    val = x

    while val <= limit:
        if (val - y) % N == 0:
            ans = val
            break
        val += M
    print(ans)
