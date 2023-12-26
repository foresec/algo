// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12985?language=python3



def solution(n,a,b):
    answer = 0

    while a != b:
        
        a += 1
        b += 1
        
        a //= 2
        b //= 2
        
        answer += 1
        
    return answer