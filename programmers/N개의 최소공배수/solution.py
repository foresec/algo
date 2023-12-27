// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12953?language=python3#

def solution(arr):
    answer = 1
    
    now = 2
    
    idx = 5
    while True:
        
        for num in arr:
            if num == 1:
                arr.remove(num)
                
        if len(arr) == 0:
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