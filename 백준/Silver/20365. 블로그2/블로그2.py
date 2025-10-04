N = int(input())


quiz = input().rstrip()

compressed = quiz[0]

for i in range(1, N):
    if quiz[i] != quiz[i - 1]:
        compressed += quiz[i]


temp = len(compressed)
ans = 1
if temp > 1:
    ans = temp // 2 + 1

# R -> 1

# RB -> 2
# RBR -> 2
# RBRB -> 3
# RBRBR -> 3
# RBRBRB-> 4
# RBRBRBR -> 4
# RBRBRBRB ->  5
print(ans)
