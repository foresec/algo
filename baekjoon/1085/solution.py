// [문제 링크]: https://www.acmicpc.net/problem/1085

x, y, w, h = map(int, input().split())
​
ans_x = min(abs(w-x), x)
ans_y = min(abs(h-y), y)
​
print(min(ans_x, ans_y))