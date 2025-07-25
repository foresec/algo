X = int(input())
ans = 0

# 연속된 2개의 수의 차이가 일정한 수열 : 등차수열
# X의 각 자리가 등차수열을 이룬다면 그 수를 한수라고 함함

for x in range(X, 0, -1):

    str_num = str(x)
    if len(str_num) == 1:
        ans += 1
    else:
        diff = int(str_num[0]) - int(str_num[1])
        check = True
        for i in range(0, len(str_num) - 1):
            if int(str_num[i]) - int(str_num[i + 1]) != diff:
                check = False
                break
        if check:
            ans +=1        


# 한수의 갯수
print(ans)
