// function solution(n,a,b)
// {
//     let answer = 0;
    
//     // 같아지기 직전까지(1, 2가 될때까지)
//     while (a !== b) {
    
//         a = Math.floor((a + 1) / 2)
//         b = Math.floor((b + 1) / 2)             
//         answer += 1
//     }

//     return answer;
// }

// A번과 B번이 만나는 라운드
function solution(n,a,b) {
    let answer = 0;
    
    while (a !== b) {
        a = Math.floor((a + 1) / 2)
        b = Math.floor((b + 1) / 2)   
        answer += 1
    }
    
    return answer;
}