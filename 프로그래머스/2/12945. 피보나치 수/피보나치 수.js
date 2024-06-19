function solution(n) {
    const dp = Array.from({length:n+1}, ()=>0)
    dp[1] = 1
    dp[2] = 1
    
    if (n === 2) return dp[2]
    
    for (let i = 2; i< n + 1; i++) {
        dp[i] = (dp[i-1] + dp[i-2]) %1234567
    }
    
    let answer = dp[n]
    
    return answer;
}