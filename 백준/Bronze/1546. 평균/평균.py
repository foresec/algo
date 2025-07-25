N = int(input())
scores = list(map(int, input().split()))

max_score = max(scores)
answer = sum(scores) / max_score * 100

print(answer/N)
    
