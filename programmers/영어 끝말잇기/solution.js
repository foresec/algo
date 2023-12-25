// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
    let answer = [0,0];

    for (let i = 1; i < words.length ; i += 1) {

        // 끝말잇기가 성립이 안될때
        if (words[i - 1][words[i - 1].length - 1] !== words[i][0] || words.slice(0, i).includes(words[i])) {
            let people = i % n
            let turn = Math.floor(i / n)
            answer = [people+1, turn+1]
            break

        }
        
        // 중복된 단어가 있을 때
//         if (words.slice(0, i).includes(words[i])) {
//             let people = i % n
//             let turn = Math.floor(i / n)
//             answer = [people + 1, turn + 1]
//             break
            
//         }
    }

    return answer;
}


