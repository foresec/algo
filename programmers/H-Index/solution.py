// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/42747?language=python3

# def solution(citations):
#     answer = 0
#     len_c = len(citations)
#     citations.sort(reverse = True)
    
#     max_v = max(citations)
#     check = 0
#     idx = 0
    
#     while idx < len_c:
    
#         for i in range(len_c):
#             if citations[i] >= max_v:
#                 check += 1
        
#         if max_v == check:
#             answer = max_v
#             break
            
#         check = 0
        
#         idx += 1
#         max_v = citations[idx] 

            
    
#     return answer


def solution(citations):
    answer = 0
    len_c = len(citations)
    citations.sort(reverse=True)

    for h_index in range(1, len_c + 1):
        if citations[h_index - 1] >= h_index:
            answer = h_index
        else:
            break

    return answer