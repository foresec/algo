// [문제 링크]: https://www.acmicpc.net/problem/11000

# N개의 수업이 주어질 때, 최소의 강의실을 사용해야함
# 얼마나 같은 시간 내에 최대로 겹치냐가 문제
import heapq, sys
input = sys.stdin.readline
N = int(input())
arr = [list(map(int, input().split())) for _ in range(N)]
​
arr.sort()
# 시간 초과 없이 끝나는 시간이 가장 빠른 순으로 pop되는 자료구조가 필요하므로 heapq사용
hq = []
# 제일 처음 끝나는 시간을 넣고
heapq.heappush(hq, arr[0][1])
​
​
for i in range(1, N):
​
    # 가장 빨리 끝나는 수업이 끝나기 전에 시작한 수업이 있다면, 그 수업을 넣어줌
    if hq[0] > arr[i][0]:
        heapq.heappush(hq, arr[i][1])
    # 그렇지않다면, 가장 빨리 끝난 수업을 빼고, 새로운 수업을 넣어줌
    else:
        heapq.heappop(hq)
        heapq.heappush(hq, arr[i][1])
​
​
print(len(hq))