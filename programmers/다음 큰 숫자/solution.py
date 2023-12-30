// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12911

# 이경우는 100(4)같은 경우가 고려가 안됨

# def solution(n):
#     answer = 0
    
#     bin_num =""
#     while n > 0:
#         if n % 2 == 0:
#             bin_num = "0" + bin_num
#         else:
#             bin_num = "1" + bin_num
#         n //= 2
        
#     bin_list = list(bin_num) 

#     check = False
#     idx = 0
#     one_cnt = 0
#     for i in range(len(bin_list) - 1, 0, -1):
#         if bin_list[i-1] == "0" and bin_list[i] == "1":
#             bin_list[i-1] = "1"
#             bin_list[i] = "0"
#             idx = i
#             one_cnt = bin_list[i:].count("1")
#             check = True
#             break
            
#     if check:        
#         behind = ("0" * (idx - one_cnt)) + ("1" * one_cnt)  
#         bin_num = "".join(bin_list[:idx+1]) + behind
#     else:
#         bin_num = "10" + bin_num[1:]
        

    
#     # 십진수로
#     answer = 0
#     len_num = len(bin_num)
#     for i in range(len_num - 1, -1, -1):
#         if bin_num[i] == "1":       
#             answer += 2 ** (len_num  - i -1)
#     return answer


def solution(n):
    answer = 0
    # 이진수로 변환
    bin_num = bin(n)[2:]

    # 다음 큰 숫자 
    for i in range(n+1, 1000001):
        if bin(i)[2:].count('1') == bin_num.count('1'):
            answer = i
            break
            
    return answer  


