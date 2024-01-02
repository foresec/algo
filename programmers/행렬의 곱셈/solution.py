// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12949?language=python3

# 어렵게 생각할 거 없고 제목이 행렬의 곱셈이다..

# 1 정석에 가까운 풀이인듯
def solution(arr1, arr2):
    
    m = len(arr1)
    n = len(arr2[0])
    K = len(arr2)
    # (m * k) * (k * n) -> (m * n) 즉, m이 row 그리고 n이 col
    answer = [[0] * n for _ in range(m)]
    
    for i in range(m):
        for j in range(n):
            for k in range(K):
                # print([i, j],"|", [i, k], [k, j])
                answer[i][j] += arr1[i][k] * arr2[k][j]
    
    return answer

# 2
# zip으로 전치행렬을 만들어 풀이
# 전치행렬 : 임의의 행렬 A가 주어졌을 때, 그 행렬의 행과 열을 바꾸어 얻어낸 행렬
def solution(arr1, arr2):
    answer = []  
    
    for row_a in arr1:
        temp_row = []  # 현재 행 단위 저장
        
        # zip으로 전치행렬만듦
        # 전치 행렬을 만듦으로서 `각 행의 n번째 열`을 바로 가져옴 
        # ex) tc 2번에서 (5, 2, 3) -> (4, 4, 1) -> ...순으로
        for col_b in zip(*arr2):
            sum_temp = 0
            # 원소별 곱셈의 합 계산
            for a, b in zip(row_a, col_b):
                sum_temp += a * b
                
            # 계산된 합을 현재 행의 결과 리스트에 추가    
            temp_row.append(sum_temp)  
            
        # 완성된 행을 전체 행렬에 추가    
        answer.append(temp_row)  

    # ee = [[2,5], [6,3], [3,2]]
    # print(ee, list(zip(*ee)))
    # 튜플 형태로 반환됨
    # # [[2, 5], [6, 3], [3, 2]] [(2, 6, 3), (5, 3, 2)]
    
    return answer

