// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/42842

def solution(brown, yellow):
    answer = []
    
    for i in range(1, yellow +1):
        if yellow % i == 0:
            a = i
            b = yellow // i
            
            if a + 1 + b + 1 == brown // 2:
                answer = [b + 2, a + 2]
                break
                
    return answer
