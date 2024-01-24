// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12912

def solution(a, b):
    if a > b:
        a,b = b,a
    answer = sum(range(a,b+1))
    return answer