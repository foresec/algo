// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12933

def solution(n):
    answer = ""
    temp= list(str(n))
    listed = list(map(int, temp))
    listed.sort(reverse=True)
    
    
    for num in listed:
        answer += str(num)

    return int(answer)