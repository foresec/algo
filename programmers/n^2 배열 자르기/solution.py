// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/87390?language=python3

# def solution(n, left, right):
#     answer = []
    
#     for i in range(left, right + 1):
#         row = i // n
#         col = i % n
#         temp = max(row, col) + 1
#         answer.append(temp)
    
#     return answer

def solution(n, left, right):
    size = right - left + 1
    answer = [0] * size

    for i in range(size):
        index = left + i
        row = index // n
        col = index % n
        answer[i] = max(row, col) + 1

    return answer
