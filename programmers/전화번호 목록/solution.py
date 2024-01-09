// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/42577

def solution(phone_book):
    answer = True

    # sort가 포인트
    phone_book.sort()
    
    for i in range(len(phone_book)-1):
        if phone_book[i+1].startswith(phone_book[i]) :
            answer = False
            break
              
    return answer


# def solution(phone_book):
#     answer = True
#     pn_dict = {}
    
#     # for phone_number in phone_book:
#     #     pn_dict[phone_number] = 1
#     pn_dict = dict.fromkeys(phone_book, 0)
    

        
#     for phone_number in phone_book:
#         temp = ""
#         for number in phone_number:
#             temp += number
#             if temp in pn_dict and temp != phone_number:
#                 answer = False
#     return answer



