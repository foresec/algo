// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/64065?language=python3

# 붙여나감
def solution(s):
    answer = []
    # split을 잘하고
    first = s[2:-2].split("},{")
    second = []
    for f in first:
        a = list(map(int, f.split(",")))
        second.append(a)
    
    # 가장 작은 길이부터 sort해서 not in 으로 채워나가는걸 찾는다??(append)
    second.sort(key= lambda x: len(x))
    
    answer.append(second[0][0])
    for i in range(1, len(second)):
        b = set(second[i]) - set(second[i-1])
        answer.append(b.pop())
    
    return answer

def solution(s):
    answer = []
    
    # split을 잘하고
    first = s[2:-2].split("},{")
    second = []
    
    # set 하나에 저장해서 비교하는게 더 빠르다
    seen = set()  

    for f in first:
        a = list(map(int, f.split(",")))
        second.append(a)
    
    # 가장 작은 길이부터 sort
    second.sort(key=lambda x: len(x))

    # 중복 체크하면서 값을 추가
    for i in range(len(second)):
        for num in second[i]:
            # set과 비교
            if num not in seen:
                answer.append(num)
                seen.add(num)
    
    return answer



