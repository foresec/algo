// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/42586

# def solution(progresses, speeds):
#     answer = []
#     turn = 0
    
#     while turn < len(progresses):
#         # 한 턴당 배포할 수 있는 수
#         cnt = 0  
        
#         # 누적
#         for i in range(turn, len(progresses)):
#             progresses[i] += speeds[i]
            
#         # 조건에 맞는 값 반영
#         while turn < len(progresses) and progresses[turn] >= 100:
#             turn += 1
#             cnt += 1

#         # 배포할 작업이 존재한다면 count
#         if cnt > 0:
#             answer.append(cnt)

#     return answer


# def solution(progresses, speeds):

#     answer = []
#     time = 0
#     count = 0
#     while len(progresses)> 0:
#         if (progresses[0] + time * speeds[0]) >= 100:
#             progresses.pop(0)
#             speeds.pop(0)
#             count += 1
#         else:
#             if count > 0:
#                 answer.append(count)
#                 count = 0
#             time += 1
#     answer.append(count)
#     return answer


# 각 배포마다 몇 개의 기능이 배포되는지
def solution(progresses, speeds):
    answer = []
    
    compare = []
    for i in range(len(progresses)):
        left = (100 - progresses[i]) // speeds[i]
        
        if (100 - progresses[i]) % speeds[i] != 0:
            left += 1
            
        compare.append(left)
        
    stack = []
    
    while compare:
        # 지금 판별하는 차례의 수가 더 크면 반영
        if stack and max(stack) < compare[0]:
            answer.append(len(stack))
            stack = []
        # 아니라면 stack에 더해주기            
        else:
            stack.append(compare.pop(0))

    # 남은 스택이 있다면 더해주기
    if stack:
        answer.append(len(stack))

    return answer

