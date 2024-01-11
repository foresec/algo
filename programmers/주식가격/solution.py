// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/42584

# 다음 거랑 비교해서
def solution(prices):
    answer = []
    len_price = len(prices)
    
    for i in range(len_price):
        cnt = 0

        for j in range(i, len_price):
            cnt += 1
            
            if prices[i] > prices[j] or j == len_price - 1:
                answer.append(cnt-1)
                cnt = 0
                break
                
                
    return answer