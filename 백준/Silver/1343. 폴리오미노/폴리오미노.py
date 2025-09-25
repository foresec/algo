board = input()

ap = "AAAA"
bp = "BB"

bl = board.split(".")

ans = -1
check = True
for i in range(len(bl)):
    blank = bl[i]
    if blank == "":
        continue

    if len(blank) % 2==1:
        check = False
        break
    else:
        cnt = len(blank) // 4
        last = (len(blank) % 4) // 2
        word = cnt * "AAAA" + last * "BB"
        bl[i] = word

if check:   
    ans = ".".join(bl)

print(ans)
