// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/42747?language=python3


def solution(citations):
    answer = 0
    len_c = len(citations)
    
    citations.sort(reverse=True)
     
    for h_idx in range(1, len_c + 1):
        
        if citations[h_idx - 1] >= h_idx:
            answer = h_idx
            print(answer)
        else:
            break

    return answer