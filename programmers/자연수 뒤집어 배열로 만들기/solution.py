// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12932

def solution(n):
    temp = str(n)[::-1]
    answer = list(map(int, list(temp)))
    return answer