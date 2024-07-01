// function solution(n, words) {
//     let answer = [0,0];

//     for (let i = 1; i < words.length ; i += 1) {

//         // 끝말잇기가 성립이 안될때
//         if (words[i-1][words[i-1].length-1] != words[i][0]) {
//             let people = i % n
//             let turn = Math.floor(i / n)
//             answer = [people+1, turn+1]
//             break

//         }
        
//         // 중복된 단어가 있을 때
//         if (words.slice(0, i).includes(words[i])) {
//             let people = i % n
//             let turn = Math.floor(i / n)
//             answer = [people + 1, turn + 1]
//             break
            
//         }
//     }

//     return answer;
// }

// 가장 먼저 탈락하는 사람의 번호와 그 사람이 자신의 몇번째 차례에 탈락하는지 
function solution(n, words) {
    let stop = 0
    let answer = [0,0]
    
    for (let i = 1 ;i < words.length; i++) {
        
        if (words[i-1].at(-1) !== words[i][0]) {
            stop = i
            break
        }
        
        if (words.slice(0, i-1).includes(words[i])) {
            stop = i
            break
        }
    }
    if (!stop) return answer
    
    answer[0] = stop % n + 1
    answer[1] = Math.floor(stop / n) + 1

    return answer
}
