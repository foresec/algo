// [문제 링크]: https://www.acmicpc.net/problem/2564

import sys
input = sys.stdin.readline
​
c, r = map(int, input().split())
N = int(input())
info = []
​
for _ in range(N):
    a, b = map(int, input().split())
    info.append([a, b])
​
my_dir, my_dis = map(int, input().split())
​
ans = 0
​
for dir, dis in info:
​
    if my_dir == dir:
        ans += abs(my_dis - dis)
​
    # 동근이와 상점 모두가 가로줄일 때
    elif my_dir <= 2 and dir  <= 2:
        a = (r + min(my_dis + dis, c - my_dis + c - dis))
        ans += (r + min(my_dis + dis, c - my_dis + c - dis))
​
​
    # 동근이는 가로줄, 상점이 세로줄일 때
    elif my_dir <= 2 and dir > 2:
        if dir == 3 and my_dir == 1:
            ans += (my_dis + dis)
​
        elif dir == 3 and my_dir == 2:
            ans += my_dis + (r - dis)
​
        elif dir == 4 and my_dir == 1:
            ans += (c - my_dis) + dis
​
        elif dir == 4 and my_dir == 2:
            ans += ((c - my_dis) + (r - dis))
​
       
    # 동근이와 상점 모두가 세로줄일 때
    elif my_dir > 2 and dir > 2:
        ans += (c + min(my_dis + dis, r - my_dis + r - dis))
​
​
    # 동근이는 세로줄, 상점이 가로줄일 때
    elif my_dir > 2 and dir <= 2:
        if dir == 1 and my_dir ==3:
            ans += (my_dis + dis)
​
        elif dir == 1 and my_dir == 4:
            ans += my_dis + (c - dis)
​
        elif dir == 2 and my_dir == 3:
            ans += (r - my_dis) + dis
​
        elif dir == 2 and my_dir == 4:
            ans += ((r - my_dis) + (c - dis))
​
​
​
​
print(ans)