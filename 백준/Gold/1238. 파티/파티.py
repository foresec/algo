# import sys

# input = sys.stdin.readline
# import heapq

# INF = float("inf")


# def bfs(n):
#     dist = [INF] * (N + 1)
#     dist[n] = 0
#     q = []
#     heapq.heappush(q, (0, n))

#     while q:
#         val, node = heapq.heappop(q)

#         # 저장해둔 거리값이 이번 값보다 이미 작다면 계산할 필요X
#         if dist[node] < val:
#             continue

#         for nn, nw in adj_list[node]:
#             temp = nw + val
#             if dist[nn] > temp:
#                 dist[nn] = temp
#                 heapq.heappush(q, (temp, nn))

#     return dist


# # 각자 마을에서 X왕복거리(N->X, X->N) 최소거리를 구하고,
# # 그중 최대값 학생 출력
# N, M, X = map(int, input().split())

# adj_list = [[] for _ in range(N + 1)]

# for _ in range(M):
#     s, e, w = map(int, input().split())
#     adj_list[s].append((e, w))


# # 먼저 X->N값 구하고
# X_dist = bfs(X)

# total = 0

# # 각 N->X값을 구한것에다가 위에서 구한 것 더해서 최대값인 학생찾기
# for i in range(1, N + 1):
#     if i == X:
#         continue
#     N_dist = bfs(i)
#     total = max(total, N_dist[X] + X_dist[i])

# print(total)


import sys

input = sys.stdin.readline
import heapq

INF = float("inf")


def bfs(graph, n):
    dist = [INF] * (N + 1)
    dist[n] = 0
    q = []
    heapq.heappush(q, (0, n))

    while q:
        val, node = heapq.heappop(q)

        # 저장해둔 거리값이 이번 값보다 이미 작다면 계산할 필요X
        if dist[node] < val:
            continue

        for nn, nw in graph[node]:
            temp = nw + val
            if dist[nn] > temp:
                dist[nn] = temp
                heapq.heappush(q, (temp, nn))

    return dist


# 각자 마을에서 X왕복거리(N->X, X->N) 최소거리를 구하고,
# 그중 최대값 학생 출력
N, M, X = map(int, input().split())

adj_list = [[] for _ in range(N + 1)]
reverse_adj_list = [[] for _ in range(N + 1)]

for _ in range(M):
    s, e, w = map(int, input().split())
    adj_list[s].append((e, w))
    reverse_adj_list[e].append((s, w))


# 먼저 X->N값 구하고
XtoN_dist = bfs(adj_list, X)
NtoX_dist = bfs(reverse_adj_list, X)


total = 0
for i in range(1, N + 1):
    total = max(total, XtoN_dist[i] + NtoX_dist[i])

print(total)
