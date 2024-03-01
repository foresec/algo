// [문제 링크]: https://www.acmicpc.net/problem/11404

​
import sys
​
def floyd():
    for n in range(N):
        D[n][n] = 0                 # 자기자신-> 자기자신은 0
​
        # 연결값 구하기
        for i in range(N):          
            for j in range(N):
                # 중간에 n을 거쳐오는 방법을 고려하여 최솟값 대입
                D[i][j] = min(D[i][j], D[i][n] + D[n][j])   
​
​
    # 이어지지 않았다면 0으로 값 변환
    for x in range(N):
        for y in range(N):
            if D[x][y] == INF:
                D[x][y] = 0
​
​
N = int(sys.stdin.readline())
M = int(sys.stdin.readline())
INF = 999999999
​
D = [[INF] * N for _ in range(N)]           # 비용 모음
​
for _ in range(M):
    s, e, d = map(int, sys.stdin.readline().split())
    D[s-1][e-1] = min(D[s-1][e-1], d)       # 연결된 정점과 비용(기존 값과 비교하여) 입력
​
floyd()
​
for i in range(N):
    print(*D[i])
​