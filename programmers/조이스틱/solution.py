// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/42860

def calculate_right(name):
    right = 0

    for i in range(len(name) - 1, -1, -1):
        if name[i] != "A":
            right = i
            break

    return right


def calculate_left(name):
    left = len(name)
    
    for i in range(1, len(name)):
        if name[i] == "A":
            temp = 0
            temp += (i-1) * 2
            
            for j in range(i, len(name)):
                if name[j] != "A":
                    temp += len(name) - j
                    break
                    
            if left <= temp:
                break
                    
            left = min(left, temp)
    
    return left

def solution(name):
    answer = 0
    
    # 위아래
    for i in range(len(name)):
        a = ord('Z') - ord(name[i]) + 1
        b = ord(name[i]) - ord("A")
        updown = min(a, b)
        answer += updown
    
    # 오른쪽방향    
    right = calculate_right(name)
    
    # 왼쪽방향
    left = calculate_left(name)
        
    # 뒤집어서 바로 왼쪽부터 가는 거 탐색 
    name2 = name[::-1]
    
    left2 = calculate_left(name2) + 1
    
    # 뒤집혔을 때의 최소 이동 횟수
    leftright = min(left, right, left2)
    answer += leftright
    
    return answer
