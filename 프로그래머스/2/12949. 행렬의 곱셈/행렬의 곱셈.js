
// 1
// 1,2의 속도차이가 막 두드러지게 나진 않음

// function solution(arr1, arr2) {
        
//     let row_len = arr1.length
//     let col_len = arr2[0].length
//     let k_len = arr2.length
    
//     let answer = Array(row_len).fill(0).map(() => Array(col_len).fill(0));
    
//     for (let i = 0; i < row_len; i++) {
//         for (let j = 0 ; j < col_len; j++) {

//             for (let k = 0; k < k_len; k++) {
//                 answer[i][j] += arr1[i][k] * arr2[k][j]
//             }
//         }
        
//     }
//     return answer;
// }



// 2 참고풀이
// function solution(arr1, arr2) {
//     return arr1.map((row) => 
//         arr2[0].map((x,y) => 
//             row.reduce((a,b,c) => 
//                 a + b * arr2[c][y]
//             )))
// }


function solution(arr1, arr2) {
    let row = arr1.length
    let col = arr2[0].length
    const answer = Array(row).fill(0).map(()=>Array(col).fill(0))
    
    let plus = arr2.length
    
    for (let i= 0;i<row;i++) {
        for (let j =0;j<col;j++) {
            for (let k =0;k<plus;k++) {
                answer[i][j] += arr1[i][k] * arr2[k][j]
            }
        }
    }
    
    return answer
    
}