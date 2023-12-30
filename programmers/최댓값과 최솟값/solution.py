// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12939?language=python3

def solution(s):
    answer = ''
    nums = list(map(int, s.split()))

    answer += str(min(nums))
    answer += " "
    answer += str(max(nums))
    return answer