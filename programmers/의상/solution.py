// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/42578#


def solution(clothes):
    
    wearing = {}
    
    for c in clothes:
        if c[1] in wearing:
            wearing[c[1]] += 1
        else:
            wearing[c[1]] = 1

    answer = 0
    
    cnt = 1
    
    for val in wearing.values():
        # 각 val 당 입지 않는 경우의 수까지 더하여 곱해주고
        cnt *= (val + 1)
    # 전부 안입는 한가지 경우를 뺌        
    answer += cnt - 1
        
    return answer



# 혹은 각 1가지만 입는 수(a + b) + 조합수(a*b)도 가능하지만 구현이 오히려 더 복잡함

