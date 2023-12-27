// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12953?language=python3#

from math import gcd

def lcm(x, y):
    return x * y // gcd(x, y)

def solution(arr):
    answer = arr[0]
    for num in arr[1:]:
        answer = lcm(answer, num)
    return answer




# def solution(arr):
#     answer = 1
#     now = 2

#     while True:
        
#         cnt = 0
#         for num in arr:
#             if num == 1:
#                 cnt += 1

#         if cnt == len(arr):
#             break

#         check = False
#         for i in range(len(arr)):
#             if arr[i] % now == 0:
#                 arr[i] = arr[i] // now
#                 check = True

#         if check:
#             answer *= now
#         else:
#             now += 1


#     return answer