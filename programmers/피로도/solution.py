// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/87946?language=python3

def dfs(k, cnt, dungeons, visited):    
    global answer     
    
    # 현재 answer보다 cnt가 더 많아지면 업데이트
    if cnt > answer:        
        answer = cnt	
        
    for i in range(len(dungeons)):    
        # 피로도 조건을 만족하고, 방문한적 없을 경우
        if k >= dungeons[i][0] and not visited[i]:        	
            visited[i] = 1            
            dfs(k - dungeons[i][1], cnt + 1, dungeons, visited)            
            visited[i] = 0  
            
def solution(k, dungeons):    
    global answer
    answer = 0
    len_d = len(dungeons)
    visited = [0] * len_d
    
    # 백트래킹 구현
    dfs(k, 0, dungeons, visited)  
    
    return answer
