// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/87390

// // 틀림(실패 (signal: aborted (core dumped)) )
// function solution(n, left, right) {
    
//     const temp = []
//     for (let i=1; i < n+1; i++) {
//         let rows = []
//         for (let j=1; j < n+1; j++) {
//             rows.push(Math.max(i, j))
//         }
//         temp.push(rows)
        
//     }
//     let answer = temp.flat().slice(left, right+1)
//     return answer;
// }


// function solution(n, left, right) {
//     const answer = []
//     // 한줄로 다 넣기
//     for (let i = left; i <= right; i++) {
//         const row = Math.floor(i / n)
//         const col = i % n;
//         const value = Math.max(row+1, col+1);
//         answer.push(value);
//     }
//     return answer;
// }


function solution(n, left, right) {
    const size = right - left + 1
    const answer = Array(size).fill(0)

    // 한줄로 다 넣기
    for (i=0;i<size;i++) {
        let temp = left + i
        const row = Math.floor(temp / n)
        const col = temp % n
        const val = Math.max(row, col) + 1
        answer[i] = val        
    }
    console.log(answer.slice(2,2))

    return answer;
}







