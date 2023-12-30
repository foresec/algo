// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12924

def solution(n):
    answer = 1
    
    for i in range(n // 2 +1, 0, -1):
        temp = i
        for j in range(i-1, 0, -1):
            temp += j
            
            if temp > n:
                break
            elif temp == n:
                answer += 1
                break
                
    return answer