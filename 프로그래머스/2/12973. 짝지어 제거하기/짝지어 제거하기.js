// function solution(s) {
//     let answer = 0
//     let stack = []
    
    
//     // stack을 써서 남아있는 바로 전 값과 비교
//     for (alpha of s) {
        
//         if (stack && stack[stack.length-1] === alpha) {
//             stack.pop()
//         }
//         else {
//             stack.push(alpha)
//         }
//     }
//     console.log(!stack.length)
//     // stack이 남은 수가 없다면 성공
//     if (!stack.length) {
//         answer = 1
//     }
         
//     return answer;
// }


// function solution(s) {

//     let stack = []
    
//     for (let i = 0; i < s.length; i++) {
        
//         if (stack.length > 0) {
//             let a = stack.pop() 
//             if (a !== s[i]) {
//                 stack.push(a)
//                 stack.push(s[i])
//             }
//         } else {
//             stack.push(s[i])
//         }
//     }
    
//     return stack.length === 0 ? 1:0
// }

function solution(s) {
    const stack = [];

    for (const alpha of s) {
        if (stack.length > 0 && stack.at(-1) === alpha) {
            stack.pop();
        } else {
            stack.push(alpha);
        }
    }

    return stack.length === 0 ? 1 : 0;
}
