from collections import deque

N, K = map(int, input().split())


arr = deque(list(range(1, N + 1)))
ans = []


while arr:
    # K-1번 먼저빼면서 뒤에 채워넣고
    for _ in range(K - 1):
        temp = arr.popleft()
        arr.append(temp)
    # 진짜 K번째는 따로 빼서 보관
    val = arr.popleft()
    ans.append(val)

print("<", end="")
for num in ans[: N - 1]:
    print(f"{num}, ", end="")
print(ans[-1], end="")
print(">", end="")
