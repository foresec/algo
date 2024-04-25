// [문제 링크]: https://www.acmicpc.net/problem/1753

import sys
import heapq
​
input = sys.stdin.readline
​
def dijkstra(start):
    distance = [float('inf')] * (V + 1)
    distance[start] = 0
    pq = [(0, start)]  # 우선순위 큐를 사용하여 (거리, 노드) 형태로 저장
    
    while pq:
        dist, node = heapq.heappop(pq)
        
        # 이미 처리된 노드일 경우 스킵
        if distance[node] < dist:
            continue
        
        for next_node, weight in adj_list[node]:
            new_dist = dist + weight
            
            # 더 짧은 경로를 찾은 경우 갱신
            if new_dist < distance[next_node]:
                distance[next_node] = new_dist
                heapq.heappush(pq, (new_dist, next_node))
                
    return distance
​
V, E = map(int, input().split())
K = int(input())
adj_list = [[] for _ in range(V + 1)]
​
for _ in range(E):
    s, t, val = map(int, input().split())
    adj_list[s].append((t, val))
​
distances = dijkstra(K)
​
for i in range(1, V + 1):
    if distances[i] != float('inf'):
        print(distances[i])
    else:
        print("INF")
​