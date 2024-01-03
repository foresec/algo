// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/17680

# Cache Hit : CPU 가 참조하고자 하는 메모리가 캐시에 존재하고 있을 경우
# Cache Miss : CPU 가 참조하고자 하는 메모리가 캐시에 존재하지 않을 경우

# 최근에 쓴걸 cache 맨앞에
# 캐시 용량보다 큰 경우, 가장 오랫동안 쓰지 않은 것을 캐시에서 제거
from collections import deque

def solution(cacheSize, cities):
    # 맨 뒤가 최근에 쓴거
    # 맨 처음이 오래된거
    q = deque()
    answer = 0
    
    if cacheSize == 0:
        return 5 * len(cities)
    
    for c in cities:
        # 대소문자 통일
        city = c.lower()
        
        # Cache Miss 
        if city not in q:
            if len(q) >= cacheSize:
                q.popleft()
            q.append(city)
            answer += 5
            
        # Cache Hit 
        else:
            q.remove(city)
            q.append(city)
            answer += 1
            
          
    return answer