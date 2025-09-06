N = int(input())
arr = list(map(int, input().split()))

# 오름차순 정렬
arr.sort()
ans = [0] * N 

ans[0] = arr[0]

for i in range(1, N):
    ans[i] = ans[i-1] + arr[i]

    
print(sum(ans))