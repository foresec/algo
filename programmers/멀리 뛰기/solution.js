// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12914?language=javascript

// 계산시 피보나치와 동일하게 증가
function solution(n) {

    // 2 이하면 n 반환
    if (n <= 2) {
        return n
    }
    
    // n+1길이의 배열에 0을 채움
    const dp =  Array.from({length: n+1}, () => 0)
    
    dp[1] = 1
    dp[2] = 2
    
    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i-1] + dp[i-2]) % 1234567
    }

    return dp[n];
}