// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12985?language=python3



def solution(n,a,b):
    answer = 0

    while a != b:
        
        if a % 2 == 1:
            a //= 2
            a += 1
        else:
            a //= 2
            
        if b % 2 == 1:
            b //= 2
            b += 1
        else:
            b //= 2
  
        answer += 1
        

    return answer