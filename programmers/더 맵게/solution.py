// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/42626

import heapq

def solution(scoville, K):
    
    heapq.heapify(scoville)
    answer = 0

    while scoville[0] < K:
        
        if len(scoville) < 2:
            return -1
        
        min1 = heapq.heappop(scoville)
        min2 = heapq.heappop(scoville)
        new_scoville = min1 + (min2 * 2)
        
        heapq.heappush(scoville, new_scoville)
        
        answer += 1

    return answer
