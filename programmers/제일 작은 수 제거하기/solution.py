// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12935

def solution(arr):
    arr.remove(min(arr))
    if not arr:
        arr = [-1]
    return arr