// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12925

def solution(s):

    if s[0] == "-":
        return -int(s[1:])
    else:
        return int(s)
    
    