// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12953?language=python3#

# def get_prime(n):
#     temp = [False, False] + [True] * (n-1)
#     primes = []
    
#     for i in range(2, int(n**0.5) + 1):
#         if temp[i]:
#             primes.append(i)
#             for j in range(i * i, n+1, i):
#                 temp[j] = False
                
#     for i in range(max(2, int(n**0.5) + 1), n + 1):
#         if temp[i]:
#             primes.append(i)
#     return primes
    

# def solution(arr):
#     answer = 1
    
    
#     prime = get_prime(max(arr))
#     idx = 0
    
#     while True:
        
#         cnt = 0
#         for num in arr:
#             if num == 1:
#                 cnt += 1
        
#         if cnt == len(arr):
#             break

            
#         check = False
#         for i in range(len(arr)):
#             if arr[i] % prime[idx] == 0:
#                 arr[i] = arr[i] // prime[idx]
#                 check = True
        
#         if check:
#             answer *= prime[idx]
#         else:
#             idx += 1
            
    
#     return answer


def solution(arr):
    answer = 1
    now = 2

    while True:
        
        cnt = 0
        for num in arr:
            if num == 1:
                cnt += 1

        if cnt == len(arr):
            break

        check = False
        for i in range(len(arr)):
            if arr[i] % now == 0:
                arr[i] = arr[i] // now
                check = True

        if check:
            answer *= now
        else:
            now += 1


    return answer