
// // 계산시 피보나치와 동일하게 증가
// function solution(n) {

//     // 2 이하면 n 반환
//     if (n <= 2) {
//         return n
//     }
    
//     // n+1길이의 배열에 0을 채움
//     const dp =  Array.from({length: n+1}, () => 0)
    
//     dp[1] = 1
//     dp[2] = 2
    
//     for (let i = 3; i <= n; i++) {
//         dp[i] = (dp[i-1] + dp[i-2])
//     }

//     return dp[n]  % 1234567;
// }


// function solution(n) {
//     if (n <= 2) {
//         return n;
//     }

//     const dp = Array.from({ length: n + 1 }, () => 0n); // 0n으로 BigInt 배열 초기화
//     dp[1] = 1n;
//     dp[2] = 2n;

//     for (let i = 3; i <= n; i++) {
//         dp[i] = (dp[i - 1] + dp[i - 2]) ; // 나머지 연산 중에도 BigInt 사용
//     }

//     return dp[n] % 1234567n; // BigInt를 다시 일반적인 Number로 변환
// }

// console.log(solution(1000)); // 예상 결과: 662387


// 1칸 or 2칸을 뛸 수 있음
function solution(n) {
    const dp = Array(n+1).fill(0)
    dp[1] = 1
    dp[2] = 2
    
    for (let i = 1;i < n; i++){
        dp[i + 2] = (dp[i+1] + dp[i]) % 1234567
    }
    return dp[n]
}

