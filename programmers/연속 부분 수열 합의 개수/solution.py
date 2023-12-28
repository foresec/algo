// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/131701?language=python3

# # 원형 수열의 연속 부분 수열 합으로 만들 수 있는 수의 개수

# def solution(elements):
#     answer = 0
#     sum_set = set()
    
#     len_num = len(elements)
#     total = elements + elements
    
#     # 간격은 최대 5
#     for i in range(len_num):
#         for j in range(i, i + len_num ):
#             temp = sum(total[i:j])
#             sum_set.add(temp)
#     answer = len(sum_set)  
        
#     return answer



def solution(elements):
    answer = 0
    sum_set = set()
    
    len_num = len(elements)
    total = elements + elements
    
    # 간격은 최대 5
    for i in range(len_num):
        temp = 0
        for j in range(i, i + len_num):
            temp = (temp + elements[j % len_num])
            sum_set.add(temp)
    answer = len(sum_set)  
        
    return answer
