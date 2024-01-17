// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/42628

import heapq

def solution(operations):
    # 두힙을 만들고
    min_hq = []
    max_hq = []

    
    for o in operations:
        oper, n = o.split()
        num = int(n)
        
        if oper == "I":
            # 오름차순, 내림차순으로 정렬될수 있도록
            heapq.heappush(min_hq, num)
            heapq.heappush(max_hq, -num)
            
        elif oper == "D":
            # 두 hq중에 하나(어차피 갯수는 같아짐)가 존재할 때
            if max_hq:
                # 각각 -한 num을 제거
                if num == 1:
                    a = heapq.heappop(max_hq)
                    min_hq.remove(-a)
                elif num == -1:             
                    b = heapq.heappop(min_hq)
                    max_hq.remove(-b)

    if not(min_hq):
        answer = [0,0]
    else:
        answer = [max(min_hq), min(min_hq)]
    
    return answer