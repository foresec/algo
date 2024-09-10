// function solution(A, B) {
//     // 오름차순 정렬
//     A.sort((a, b) => a - b);
//     B.sort((a, b) => a - b);
    
//     let len_B = B.length
    
//     let idx = 0
//     let answer = 0
    
//     for (let A_num of A) {
        
        
//         while (idx < len_B && B[idx] <= A_num) {
//             // 지면 B팀의 다음선수로
//             idx += 1
//         }
        
//         // 끝까지 가도 못이기면 break
//         if (idx === len_B) break
        
//         // 위에서 빠져나가지 않았다면 B팀 승리횟수 + 1, 승리한 팀원 다음사람으로 넘김
//         answer += 1
//         idx += 1
//     }
    
//     return answer
// }

function solution(A, B) {
    let answer = 0
    
    A.sort((a,b)=>b-a)
    B.sort((a,b)=>b-a)
    // console.log(A, B)

    const len = A.length
    
    let idxA = 0
    let idxB = 0
    
    while (true) {
        
        let b = B[idxB]
        let a = A[idxA]
        
        if (a < b) {
            idxB++
            answer++
            idxA++
        } else {
            idxA++
        }
        
        if (idxA === len|| idxB === len) {
            break
        }
        

    }

    return answer

}