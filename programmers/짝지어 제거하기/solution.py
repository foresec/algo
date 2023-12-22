// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12973?language=python3

# 시간초과
# def solution(s):
#     answer = 1
#     alpha = list(s)
    
#     idx = 1
#     while alpha:
        
#         if idx == len(alpha):
#             answer = 0
#             break
        
#         if alpha[idx-1] == alpha[idx]:
#             alpha.pop(idx)
#             alpha.pop(idx-1)
            
#             if idx <= 1:
#                 continue
#             else:
#                 idx -= 1
        
#         else:
#             idx += 1
            
#     return answer

def solution(s):
    answer = 1
    stack = []
    
    for alpha in s:
        if stack and stack[-1] == alpha:
            stack.pop()
        else:
            stack.append(alpha)
    
    # 스택이 남아있다면 실패
    if stack:
        answer = 0
        
    return answer
