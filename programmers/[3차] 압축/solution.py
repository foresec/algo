// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/17684

def solution(msg):
    answer = []
    # 1. chr, ord로 딕셔너리 만들기(미묘하게 조금 더 빠른듯?)
    str_dict = {}
    for i in range(26):
        alpha = chr(ord('A') + i)
        str_dict[alpha] = i + 1
    
    # 2. zip함수를 이용해서 딕셔너리만들기 
    # str_dict = dict(zip("ABCDEFGHIJKLMNOPQRSTUVWXYZ", range(1,27)))
        
    n = 26    
    i = 0
    while i < len(msg):
        check = 1  
        for j in range(len(msg), i, -1):
            strs = msg[i:j]
            if strs in str_dict.keys():
                answer.append(str_dict[strs])
                
                n += 1
                next_str = msg[i:j+1]
                str_dict[next_str] = n
                
                check = j - i
                break
                
        i += check
              
        
    return answer
