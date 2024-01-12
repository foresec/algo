// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/1844

dx = [1, 0, -1, 0]
dy = [0, -1, 0, 1]


from collections import deque

def solution(maps):
    answer = -1
    
    n = len(maps)
    m = len(maps[0])
    

    q = deque()
    q.append((0, 0))
    visited = [[0] * m for _ in range(n)]
    visited[0][0] = 1
    
    while q:
        x, y= q.popleft()

        if x == n-1 and y == m-1:
            answer = visited[n-1][m-1]
            break

        for d in range(4):
            nx = x + dx[d]
            ny = y + dy[d]

            if not (0 <= nx < n and 0 <= ny < m):
                continue

            if maps[nx][ny] and visited[nx][ny] == 0:
                q.append((nx, ny))
                visited[nx][ny] = visited[x][y] + 1
    
    return answer