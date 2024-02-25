// [문제 링크]: https://www.acmicpc.net/problem/21921

N, X = map(int, input().split())
arr = list(map(int, input().split()))
​
max_v = sum(arr[:X]) 
ans = max_v
cnt = 1
​
for i in range(N-X):  
  max_v = max_v - arr[i] + arr[i+X] 
  if ans < max_v:
    ans = max_v
    cnt = 1
  elif max_v == ans and max_v > 0:
    cnt += 1
​
    
if ans == 0:
  print("SAD")
else:
  print(ans)
  print(cnt)
​