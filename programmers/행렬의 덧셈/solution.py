// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12950

def solution(arr1, arr2):
    
    N = len(arr1)
    M = len(arr1[0])
    answer = [[0] * M for _ in range(N)]
    
    for i in range(N):
        for j in range(M):
            answer[i][j] = arr1[i][j] + arr2[i][j]
            
    return answer