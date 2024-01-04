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


def solution(progresses, speeds):

    answer = []
    time = 0
    count = 0
    while len(progresses)> 0:
        if (progresses[0] + time * speeds[0]) >= 100:
            progresses.pop(0)
            speeds.pop(0)
            count += 1
        else:
            if count > 0:
                answer.append(count)
                count = 0
            time += 1
    answer.append(count)
    return answer





