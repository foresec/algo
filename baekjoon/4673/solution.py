// [문제 링크]: https://www.acmicpc.net/problem/4673

# 생성자가 없는 숫자 = 셀프 넘버
check = [False] * 10001
​
for num in range(1, 10001):
    constructor = sum(list(map(int, list(str(num))))) + num
​
    if constructor <= 10000:
        check[constructor] = True
​
​
for i in range(1, 10001):
    if check[i] == False:
        print(i)