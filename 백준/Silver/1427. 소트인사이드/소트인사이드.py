N = input()
num_list = [0] * 10
answer = ""

for num in N:
    num_list[int(num)] += 1


for i in range(9, -1, -1):
    answer += str(i) * num_list[i]

print(answer)