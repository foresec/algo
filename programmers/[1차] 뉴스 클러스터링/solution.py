// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/17677?language=python3

# def solution(str1, str2):
#     answer = 0
#     dict_str1 = {}
    
#     first = 0
#     for i in range(len(str1)-1):
#         if str1[i].isalpha() and str1[i+1].isalpha():
#             a = str1[i:i+2].lower()
#             if a not in dict_str1:
#                 dict_str1[a] = ["a"]
#             else:
#                 dict_str1[a].append("a")
                
#     for i in range(len(str2)-1):
#         if str2[i].isalpha() and str2[i+1].isalpha():
#             b = str2[i:i+2].lower()          
#             if b in dict_str1:
#                 dict_str1[b].append("b")
#                 first += 1
#             else:
#                 dict_str1[b] = ["b"]

#     second = 0
#     for val in dict_str1.values():
#         a_cnt = val.count("a")
#         b_cnt = val.count("b")
#         second += len(val)
        
#         if a_cnt >= 2 and b_cnt >= 2 and a_cnt != b_cnt:
#             first = min(a_cnt, b_cnt)     
        
#     second -= first
    
#     if first == 0 and second == 0:
#         answer = 65536
#     else:
#         answer = int((first / second) * 65536)

        
#     return answer

from collections import Counter

def solution(str1, str2):
    str1_low = str1.lower()
    str2_low = str2.lower()
    
    str1_lst = []
    str2_lst = []
    
    for i in range(len(str1_low)-1):
        if str1_low[i].isalpha() and str1_low[i+1].isalpha():
            str1_lst.append(str1_low[i] + str1_low[i+1])
    for j in range(len(str2_low)-1):
        if str2_low[j].isalpha() and str2_low[j+1].isalpha():
            str2_lst.append(str2_low[j] + str2_low[j+1])
            
    Counter1 = Counter(str1_lst)
    Counter2 = Counter(str2_lst)
    
    inter = list((Counter1 & Counter2).elements())
    union = list((Counter1 | Counter2).elements())
    
    if len(union) == 0 and len(inter) == 0:
        return 65536
    
    else:
        return int(len(inter) / len(union) * 65536)