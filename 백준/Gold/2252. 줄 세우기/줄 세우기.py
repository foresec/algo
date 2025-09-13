import sys
input = sys.stdin.readline
from collections import deque


# 위상 정렬
# 진입차수가 0인 노드를 큐에 넣고
# 큐가 빌때까지 
# 1. 큐에서 원소를 꺼내 해당 노드에서 나가는 간선을 그래프에서 제거
# 2. 새롭게 진입차수가 0이 된 노드를 큐에 삽입


def f1():
    result = []
    q = deque()
    
    for i in range(1, N + 1):
        if visited[i] == 0:
            q.append(i)

    while q:
        n = q.popleft()
        result.append(n)
        
        for j in graph[n]:
            visited[j] -= 1
            if visited[j] == 0:
                q.append(j)
    
    print(*result)
    

# N : 학생번호(정점), M : 키 비교횟수(간선)
N, M = map(int, input().split())

graph = [[] for _ in range(N + 1)]
visited = [0] * (N + 1)         # 진입 차수 저장

for _ in range(M):
    s, e = map(int, input().split())
    graph[s].append(e)
    visited[e] += 1

# print(graph)
# print(visited)

f1()