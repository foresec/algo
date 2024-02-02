// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12930

def solution(s):
    answer = ""
    
    idx = 0
    sub = 0
    while idx < len(s):
        

        if s[idx] == " ":
            sub = 0
            answer += " "
        
        elif sub % 2:          
            answer += s[idx].lower()
            sub += 1
        else:
            answer += s[idx].upper()
            sub += 1        

        idx += 1

        
    return answer