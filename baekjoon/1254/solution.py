// [문제 링크]: https://www.acmicpc.net/problem/1254

word = input()
​
len_w = len(word)
cnt = 0
​
# 조건을 만족하지 않는 부족한 만큼의 인덱스를 앞에서 찾아서
for i in range(len_w):
    if word[i:] == word[i:][::-1]:
        # 뒤에 붙여줌
        p = word + word[:i][::-1]
        cnt = len(p)
        break
​
print(cnt)
​
​