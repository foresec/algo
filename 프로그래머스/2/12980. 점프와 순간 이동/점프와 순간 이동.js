// function solution(n)
// {
//     // 맨처음 1이 필요
//     let ans = 1;

//     while (n > 1) {
//         // 나머지가 있으면 
//         if (n % 2 === 1) {
//             n -= 1
//             ans += 1
//         } else {
//             n /= 2
//         }
//     }

//     return ans;
// }




// 사용해야 하는 건전지 사용량의 최솟값
// 건전지는 점프할때만 사용
function solution(n) {
    let answer = 0
    
    while (n > 0){
        
        if (n % 2 !== 0) {
            n -= 1
            answer += 1
            
        } else {
            n /= 2
        }
        
    }
    return answer
}