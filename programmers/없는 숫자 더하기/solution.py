// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/86051

def solution(numbers):
    answer = 0
    check = [False] * 10

    for n in numbers:          
        check[n] = True
    
    for i in range(len(check)):
        if not check[i]:
            answer += i
            
    return answer