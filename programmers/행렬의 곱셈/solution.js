// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12949?language=javascript

function solution(arr1, arr2) {
        
    let row_len = arr1.length
    let col_len = arr2[0].length
    let k_len = arr2.length
    
    let answer = Array(row_len).fill(0).map(() => Array(col_len).fill(0));
    
    for (let i = 0; i < row_len; i++) {
        for (let j = 0 ; j < col_len; j++) {

            for (let k = 0; k < k_len; k++) {
                answer[i][j] += arr1[i][k] * arr2[k][j]
            }
        }
        
    }
    return answer;
}