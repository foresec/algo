N, K = map(int, input().split())
arr = list(map(int, input().split()))

num_count = [0] * 1000001
left = 0
right = 0  
cnt = 0 

while right < N:
    num_count[arr[right]] += 1
    right += 1
  
		# 더함으로서 K개를 넘으면
    while num_count[arr[right-1]] > K:
        num_count[arr[left]] -= 1
        left += 1
    
    # 최대 길이 갱신
    cnt = max(cnt, right-left)

print(cnt)