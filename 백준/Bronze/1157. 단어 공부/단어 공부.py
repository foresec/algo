word = input().upper()
word_dict = {}
answer = "?"

for w in word:
    word_dict[w] = word_dict.get(w, 0) + 1


max_val = max(word_dict.values())

max_keys = [key for key, value in word_dict.items() if value == max_val]

if len(max_keys) == 1:
    answer = max_keys[0]

print(answer)
