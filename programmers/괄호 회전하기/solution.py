// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/76502?language=python3

def solution(s):
    answer = 0
    len_s = len(s)
    complete = {"(": ")", "{":"}", "[":"]"}
    
    for i in range(len_s):        
        # if s[i] in ["]", "}", ")"]:
        #     continue
            
        stack = []
        for j in range(len_s):
            temp = s[(i+j) % len_s]
            

            
            if not stack:
                stack.append(temp)
                continue
                
            if stack[-1] in complete and complete[stack[-1]] == temp:
                stack.pop()
            else:
                stack.append(temp)   
                
        if not stack:
            answer += 1
                               
    return answer