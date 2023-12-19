// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/154539


def solution(numbers):
    answer = [-1] * len(numbers)
    stack = []
    
#     for i in range(len(numbers)-1):
#         check = False
        
#         for j in range(i+1, len(numbers)):
#             if numbers[i] < numbers[j]:
#                 answer[i] = numbers[j]
#                 check = True
#                 break 

    for i in range(len(numbers)):
        # numbers[i]와 비교했을 때 앞 숫자 중 가까운 인덱스부터 비교해서 작다면 업데이트 
        while stack and numbers[stack[-1]] < numbers[i]: 
            # 가능한 앞 인덱스의 값을 전부 업데이트 
            a = stack.pop()
            answer[a] = numbers[i]
            
        stack.append(i)


    return answer