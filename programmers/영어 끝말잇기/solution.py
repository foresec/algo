// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12981#

def solution(n, words):
    answer = [0,0]

    for i in range(1,len(words)):
        
        
        # 한 글자인 단어일 때
        if len(words[i-1]) == 1:
            e = i % n
            f = i // n
            answer = [e+1, f+1]
            break
            
               
        # 끝말잇기가 성립이 안될때
        if words[i-1][-1] != words[i][0]:
            a = i % n
            b = i // n
            answer = [a+1, b+1]
            break
            
        # 중복 등장할 때    
        if words[i] in words[:i]:
            c = i % n
            d = i // n
            answer = [c+1, d+1]
            break
        
    return answer