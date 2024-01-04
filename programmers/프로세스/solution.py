// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/42587

# # location(idx)에 해당되는 프로세스가 몇번째로 실행되는지

from collections import deque

def solution(priorities, location):
    
    answer = 0   
    q = deque(enumerate(priorities))

    while q:
        temp = q.popleft()
        if q:
            max_val = max(q, key=lambda x: x[1])
        
        # 우선순위가 아닐때
        if max_val[1] > temp[1]:
            q.append(temp)
            
        # 우선순위가 됐을 때
        else:
            # 프로세스 실행 카운트
            answer += 1
            if temp[0] == location:
                break
    
    return answer




# def solution(priorities, location):
#     jobs = len(priorities)
#     answer = 0
#     cursor = 0
#     while True:
#         if max(priorities) == priorities[cursor%jobs]:
#             priorities[cursor%jobs] = 0
#             answer += 1
#             if cursor%jobs == location:
#                 break
#         cursor += 1   
#     return answer


