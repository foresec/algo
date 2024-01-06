// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/87946?language=python3


def dfs(k, cnt, dungeons, visited):    
    global answer     
    
    if cnt > answer:        
        answer = cnt	
        
    for j in range(len(dungeons)):    	
        if k >= dungeons[j][0] and not visited[j]:        	
            visited[j] = 1            
            dfs(k - dungeons[j][1], cnt + 1, dungeons, visited)            
            visited[j] = 0  
            
def solution(k, dungeons):    
    global answer
    answer = 0
    len_d = len(dungeons)    
    visited = [0] * len_d
    
    dfs(k, 0, dungeons, visited)  
    
    return answer
