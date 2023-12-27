// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/42576

def solution(participant, completion):
    answer = ''
    p_dict = {}
    
    for i in participant:
        if i not in p_dict:
            p_dict[i] = 1
        else:
            p_dict[i] += 1
        
    for i in completion:
        if i in p_dict:
            p_dict[i] -= 1
            
    for key, cnt in p_dict.items():
        if cnt > 0:
            answer = key
            
            
    return answer