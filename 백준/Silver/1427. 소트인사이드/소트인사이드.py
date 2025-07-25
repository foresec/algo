N = input()
num_dict = {}
answer = ""

for w in N:
    num_dict[w] = num_dict.get(w, 0) + 1

num_list = sorted(num_dict.items(), key=lambda x: -int(x[0]))

for num , cnt in num_list:
    answer += num * cnt

print(answer)
    