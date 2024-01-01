// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/131127

# 10일 동안 회원자격 부여
# 가능한 날의 갯수를 구해야함

def solution(want, number, discount):
    answer = 0
    
    food_dict = dict(zip(want, number))
    
    for i in range(len(discount) - 9):
        temp = discount[i:i+10]
        cnt = 0
        
        for key, val in food_dict.items():
            if temp.count(key) != val:
                break
            else:
                cnt += 1
                
        if cnt == len(want): 
            answer += 1


    return answer