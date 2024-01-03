// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/64065?language=python3

# # 붙여나감
# def solution(s):
#     answer = []
#     # split을 잘하고
#     first = s[2:-2].split("},{")
#     second = []
#     for f in first:
#         a = list(map(int, f.split(",")))
#         second.append(a)
    
#     # 가장 작은 길이부터 sort해서 not in 으로 채워나가는걸 찾는다??(append)
#     second.sort(key= lambda x: len(x))
    
#     answer.append(second[0][0])
#     for i in range(1, len(second)):
#         b = set(second[i]) - set(second[i-1])
#         answer.append(b.pop())
    
#     return answer

# def solution(s):
#     answer = []
    
#     # split을 잘하고
#     first = s[2:-2].split("},{")
#     second = []
#     seen = set()  

#     for f in first:
#         a = list(map(int, f.split(",")))
#         second.append(a)
    
#     # 가장 작은 길이부터 sort
#     second.sort(key=lambda x: len(x))

#     # 중복 체크하면서 값을 추가
#     for i in range(len(second)):
#         for num in second[i]:
#             if num not in seen:
#                 answer.append(num)
#                 seen.add(num)
    
#     return answer


def solution(s):
    # 문자열 파싱
    tuples = s[2:-2].split("},{")
    tuples = [list(map(int, t.split(","))) for t in tuples]

    # 튜플의 길이에 따라 정렬
    tuples.sort(key=lambda x: len(x))

    # 결과를 저장할 리스트
    answer = []

    # 각 튜플을 구성하는 원소를 추가
    for t in tuples:
        for num in t:
            if num not in answer:
                answer.append(num)

    return answer

