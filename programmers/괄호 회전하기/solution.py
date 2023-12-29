// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/76502?language=python3

def solution(s):
    answer = 0
    len_s = len(s)
    
    for i in range(len_s):
        stack = []
        for j in range(i,len_s + i):
            temp = s[j % len_s]
            
            
            if not stack:
                stack.append(temp)
                continue
                
            if (stack[-1] == "(" and temp == ")" ) or (stack[-1] == "{" and temp == "}") or (stack[-1] == "[" and temp == "]"):
                stack.pop()
            else:
                stack.append(temp)   
                
        if not stack:
            answer += 1
                               
    return answer