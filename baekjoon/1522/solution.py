// [문제 링크]: https://www.acmicpc.net/problem/1522

arr = input()
min_cnt = 10000
length = len(arr)
​
a_cnt = 0
​
for a in arr:
    if a == "a":
        a_cnt += 1
    
​
if a_cnt == length:
    print(0)
    
    
else:
        for i in range(length):
                b_cnt = 0
                # a수만큼의 범위만큼
                for j in range(i, i + a_cnt):
                        # 원형
                        k = j % length
                        if arr[k] == 'b':
                                b_cnt += 1
​
                min_cnt = min(min_cnt, b_cnt)
                
        print(min_cnt)
​
        