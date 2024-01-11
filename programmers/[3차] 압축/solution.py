// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/17684

def solution(msg):
    answer = []
    # 1. chr, ord로 딕셔너리 만들기(미묘하게 조금 더 빠른듯?)
    str_dict = {}
    for i in range(26):
        alpha = chr(ord('A') + i)
        str_dict[alpha] = i + 1
    
    # 2. zip함수를 이용해서 딕셔너리만들기 
    # str_dict = dict(zip("ABCDEFGHIJKLMNOPQRSTUVWXYZ", range(1,27)))
        
    n = 26    
    i = 0
    while i < len(msg):
        # 기본적으로 i는 한칸씩 늘어날 예정
        check = 1  
        # 역으로 시작해야 최대한 뒤에서부터 긴문자열을 찾음
        for j in range(len(msg), i, -1):
            strs = msg[i:j]
            if strs in str_dict.keys():
                # 조건대로 색인번호(answer) 등록
                answer.append(str_dict[strs])
                
                # 사전 업데이트
                n += 1
                next_str = msg[i:j+1]
                str_dict[next_str] = n
                
                # 앞으로 나가야하는만큼 더해줌
                check = j - i
                
                # 찾았다면 더이상 현재상황에서는 할게 없으니 break
                break
                
        i += check
                      
    return answer
