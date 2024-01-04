// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/42586

# 효율제일 좋음 
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
# 딱히 stack의 특성을 사용한건 아닌듯
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



# 코드는 간단하지만 느림
# def solution(progresses, speeds):
#     answer = []
#     stack = []

#     while progresses:
#         progresses = [p + s for p, s in zip(progresses, speeds)]
#         count = 0

#         while progresses and progresses[0] >= 100:
#             progresses.pop(0)
#             speeds.pop(0)
#             count += 1

#         if count > 0:
#             answer.append(count)

#     return answer


