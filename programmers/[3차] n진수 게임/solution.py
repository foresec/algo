// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/17687

# n : 진법(최대 16임)
# m : 참가인원
# p : 튜브 순서

# t : 미리구할 숫자 갯수(길이네..)
def solution(n, t, m, p):
    
    # 맨 처음 0으로 시작
    answer = "0"
    num_dict = {10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F"}
    
    for num in range(30000):
        temp = ""
        # 진수 더하기
        while num > 0:
            na = num % n
            if na > 0:
                a = str(na)
                if na >= 10:
                    a = str(num_dict[na])          
                temp = a + temp 
            else:
                temp = "0" + temp    
            num //= n
            
        answer += temp
        
        if len(answer) > 1000 * m * p:
            break
            
    temp2 = []
    # range로 내 순서, 게임 인원 고려
    for i in range(p-1, len(answer), m):
        temp2.append(answer[i])
        
    answer = "".join(temp2)
    # print(answer)
    return answer[:t]