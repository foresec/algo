// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12947

def solution(x):
    answer = True
    
    if x % sum(list(map(int, list(str(x))))) != 0:
        answer = False

    return answer