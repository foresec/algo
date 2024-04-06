// [문제 링크]: https://www.acmicpc.net/problem/14719

H, W = map(int, input().split())
arr = list(map(int, input().split()))
​
water = 0
​
for i in range(1, W - 1):
​
    # 왼/오 최대높이 업데이트
    left = 0
    for j in range(i):
        if arr[j] > left:
            left = arr[j]
    
    right = 0
    for j in range(i+1, W):
        if arr[j] > right:
            right = arr[j]
​
   
    height = min(left, right)
​
    # 현재 높이보다 크다면
    if height > arr[i]:
        # 현재 높이만큼 최대에서 뺌
        water += height - arr[i]
​
print(water)
​