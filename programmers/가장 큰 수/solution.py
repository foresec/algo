// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/42746#

def solution(numbers):
    
    new = [str(num) for num in numbers]
    new.sort(key=lambda x:(x*4)[:4],reverse=True)
    answer = "".join(new)
    
    # 정수를 이어 붙여 만들었을때 맨앞에 0이면 결국 0이됨
    # 원하는 답이 정수이기 때문
    if answer[0] == "0":
        answer = "0"
    return answer