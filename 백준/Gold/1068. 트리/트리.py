import sys
input = sys.stdin.readline

N = int(input())
parents = list(map(int, input().split()))
remove_node = int(input())

def remove_effect(node):
    parents[node] = -2  # 삭제 표시
    for i in range(N):
        if parents[i] == node:  # 삭제 노드를 부모로 가진 자식도 삭제
            remove_effect(i)

remove_effect(remove_node)

cnt = 0
for i in range(N):
    if parents[i] != -2 and i not in parents:  # 삭제 안 되었고, 자식도 없으면 리프
        cnt += 1

print(cnt)
