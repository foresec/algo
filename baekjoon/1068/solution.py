// [문제 링크]: https://www.acmicpc.net/problem/1068

def remove_effect(remove):
    # 삭제된 노드를 -2로 표시, -1이 아닌 이유는 루트노드만 남아있는 경우가 있기 때문
    parent[remove] = -2 
​
    # for i, p in enumerate(parent):
    #     if p == remove:
    #         remove_effect(parent, i)
​
    for i in range(N):
        if remove == parent[i]:
            remove_effect(i)
​
​
import sys
input = sys.stdin.readline
​
N = int(input())
parent = list(map(int, input().split()))
remove_node = int(input())
​
# 삭제노드 반영
remove_effect(remove_node)
​
​
# 리프노드 찾기
cnt = 0
for i in range(N):
    if parent[i] != -2 and i not in parent:
        cnt += 1
​
​
print(cnt)
​
​
​