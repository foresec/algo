N = int(input())

ans = N
for _ in range(N):
    word = input()

    alpha = [word[0]]
    for i in range(1, len(word)):
        # 이어진 단어가 같지 않다면

        if word[i] in alpha and word[i] != word[i - 1]:
            ans -= 1
            break
        elif word[i] not in alpha:
            alpha.append(word[i])
            
print(ans)
