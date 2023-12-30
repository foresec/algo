// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/70129

# 이진 변환횟수, 변환과정에서 제거된 0의갯수
def solution(s):
    two_convert = 0
    zero_cnt = 0

    
    while s != "1":           
            
        one_cnt = s.count("1")
        zero_cnt += len(s) - one_cnt
        
        new_s = ""
        while one_cnt > 0:
            if one_cnt % 2:
                new_s = "1" + new_s
            else:
                new_s = "0" + new_s
            one_cnt //= 2     
        two_convert += 1
        
        s = new_s
            
    return [two_convert, zero_cnt]