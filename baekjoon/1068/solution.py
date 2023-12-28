// [문제 링크]: https://www.acmicpc.net/problem/1068

def remove_effect(parent, remove):
    parent[remove] = -2  # 삭제된 노드를 -1로 표시
​
    for i, p in enumerate(parent):
        if p == remove:
            remove_effect(parent, i)
​
​
import sys
​
input = sys.stdin.readline
​
N = int(input())
parent = list(map(int, input().split()))
remove_node = int(input())
​
# 삭제노드 반영
remove_effect(parent, remove_node)
​
​
# 리프노드 찾기
cnt = 0
for i in range(len(parent)):
    if parent[i] != -2 and i not in parent:
        cnt += 1
​
​
​
print(cnt)
​