// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12948

def solution(phone_number):
    n = len(phone_number)-4
    answer = "*" * n + phone_number[-4:]
    return answer