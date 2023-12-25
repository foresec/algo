// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12980

# k칸 +는 k만큼의 건전지 사용
# 현재까지 온거리 * 2는 비용X
# 이동거리 n이 주어졌을 때, 사용해야하는 건전지 사용량의 최솟값 구하기

# def solution(n):
#     ans = 1
    
#     while n > 1:
        
#         if n % 2 == 0:
#             n //= 2
        
#         else:
#             n -= 1
#             ans += 1
    

#     return ans


# 위 답변도 맞지만
# python에서 이진수로 바꿔주는 메서드가 있다. 이 메서드는 string형태로 반환함
def solution(n):
    ans = bin(n).count("1")    
    return ans

