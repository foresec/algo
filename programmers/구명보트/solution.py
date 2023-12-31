// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/42885

# def solution(people, limit):
#     people.sort()  
#     answer = 0
#     left = 0
#     right = len(people) - 1  
    
#     # 큰사람부터 태우는데, 작은 사람이 함께 탈 수 있는지 판단
#     while left <= right:
#         if people[left] + people[right] <= limit:
#             left += 1
            
#         right -= 1
#         answer += 1

#     return answer



def solution(people, limit):
    answer = 0

    people.sort()
    # 최대 몸무게 (+ 최소 몸무게 가능 여부) count
    left = 0
    right  = len(people) - 1
    while left <= right:
        
        if people[right] + people[left] <= limit:
            left += 1
            
        right -= 1
        answer += 1
             
    return answer
