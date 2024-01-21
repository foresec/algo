// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/49993#

# 가능한 스킬트리 개수, skill의 끝까지 채워질 필요는 없으나, 순서가 중요함

def solution(skill, skill_trees):
    answer = len(skill_trees)
    
    for st in skill_trees:
        check = []
        
        # 해당 인덱스를 찾아서 순서대로 더해줌
        for i in range(len(st)):
            for j in range(len(skill)):                
                if skill[j] == st[i]:
                    check.append(j)
        
        # check가 비어있을 때는 continue
        if not check:
            continue
        
        
        # 만약 check가 순차적으로 1씩 증가하는 형태가 아니라면 break
        isValid = True        
        for k in range(len(check)-1):
            if check[k] + 1 != check[k+1]:
                isValid = False
                break
        
        # 위 조건에 걸리거나 첫번째가 0이 아니면 answer-1
        if not isValid or check[0] != 0:
            answer -= 1
                
    return answer

