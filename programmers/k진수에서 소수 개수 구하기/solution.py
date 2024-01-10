// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/92335

    
def isPrime(a):
    if (a < 2):
        return False
    for i in range(2, int(a**0.5)+1):
        if (a % i == 0):
            return False
    return True

def solution(n, k):
    answer = 0
    
    num = ''
    while n > 0:
        # temp = n % k
        # n //= k
        # num = str(temp) + num
        num += str(n % k)
        n //= k
    num = num[::-1] 
    
    num_list = list(num.split("0"))

        
    # 일단 소수 구하고 에라토스테네스의 체
    for num in num_list:
        if len(num) != 0:
            if(isPrime(int(num))):
                answer += 1
        
                    
    return answer


# 에라토스테네스의 체를 쓰니 런타임 에러가 일부에서 남    
# def get_prime(a):
#     primes = [True] * (a + 1)
#     primes[0] = primes[1] = False
#     for i in range(2, int(a ** 0.5)+ 1):
#         if primes[i]:
#             for j in range(i * i, a+1, i):
#                 primes[j] = False
#     result = []
#     for x in range(a+1):
#         if primes[x]:
#             result.append(x)
#     return result

# def solution(n, k):
#     answer = 0
    
#     num = ''
#     while n > 0:
#         temp = n % k
#         n //= k
#         num = str(temp) + num
#     #     num += str(n % k)
#     #     n //= k
#     # num = num[::-1] 
    
#     num_list = list(num.split("0"))
#     num_list = [int(x) for x in num_list if x]
    
#     max_num = max(num_list)
#     prime_list = get_prime(max_num)
        
#     # 일단 소수 구하고 에라토스테네스의 체
#     for num in num_list:
#         if num in prime_list:
#             answer += 1
        
                    
#     return answer