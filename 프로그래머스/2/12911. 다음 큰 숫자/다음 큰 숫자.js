// function solution(n) {
//     let answer = 0;
    
//     const nOneCnt = n.toString(2).split("").filter(num => num === "1").length
    
//     let compareNum = n
//     while (true) {
//         compareNum += 1
        
//         let compareNumOneCnt = compareNum.toString(2).split("").filter(num => num === "1").length
//         if (nOneCnt === compareNumOneCnt) {
//             answer = compareNum
//             return answer
//         }
//     }
//     return answer;
// }



function solution(n) {
    let answer = 0;
    
    const nOneCnt = n.toString(2).match(/1/g).length
    
    let compareNum = n + 1
    while (true) {
        
        
        let compareNumOneCnt = compareNum.toString(2).match(/1/g).length
        
        if (nOneCnt === compareNumOneCnt) {
            answer = compareNum
            return answer
        }
        compareNum ++
    }
    return answer;
}