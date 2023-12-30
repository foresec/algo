// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12951#

def solution(s):
    answer = ''
    s = s.lower()
    s_list = list(s)

    for i in range(1, len(s_list)):
        if s_list[i - 1] == ' ':
            s_list[i] = s_list[i].upper()

    s_list[0] = s_list[0].upper()

    answer = ''.join(s_list)

    return answer