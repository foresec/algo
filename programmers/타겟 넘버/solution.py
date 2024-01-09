// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/43165

answer = 0

def dfs(idx, total, numbers, target): 
    global answer

    if idx == len(numbers):
        if total == target:
            answer += 1
        return

    dfs(idx + 1, total + numbers[idx], numbers, target)
    dfs(idx + 1, total - numbers[idx], numbers, target)


def solution(numbers, target):
    global answer
    
    # idx로 갯수 체크, total로 target 체크
    dfs(0, 0, numbers, target)
    
    return answer