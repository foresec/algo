// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/92335

def solution(n, k):
    answer = 0
    
    num = ''
    while n > 0:
        temp = n % k
        n //= k
        num = str(temp) + num
    
    num_list = list(num.split("0"))
    
    def isPrime(a):
        if (a < 2):
            return False
        for i in range(2, int(a**0.5)+1):
            if (a % i == 0):
                return False
        return True
        
    
    # 일단 소수 구하고 에라토스테네스의 체
    for num in num_list:
        if len(num) != 0:
            if(isPrime(int(num))):
                answer += 1
        
                    
    return answer