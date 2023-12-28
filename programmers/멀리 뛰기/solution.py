// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12914?language=python3

# 이것도 됨
# from math import comb

# def solution(n):
#     answer = 0
#     for i in range(n // 2 + 1):

#         answer += comb(n - i, i)
        
#     return answer % 1234567


# 적어보면 피보나치 형식으로 수가 늘어남
def solution(n):
    if n <= 2:
        return n
    
    dp = [0] * (n + 1)
    dp[1] = 1
    dp[2] = 2
    for i in range(3, n+1):
        dp[i] = (dp[i-1] + dp[i-2]) % 1234567
        
    return dp[n]

