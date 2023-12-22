// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/42842

def solution(brown, yellow):
    answer = []
    
    for i in range(yellow, 0, -1):
        if yellow % i == 0:
            a = i
            b = yellow // i
            
            if a + 1 + b + 1 == brown // 2:
                answer = [a + 2, b + 2]
                break
                
    return answer
