// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/64065?language=javascript

function solution(s) {
    let answer = [];
    
    lenS = s.length
    let newS = s.substring(2, lenS-2).split("},{")
    
    tuples = []
    for (t of newS) {
        let temp = t.split(",").map(Number)
        tuples.push(temp)
    }
    
    tuples.sort((a, b) => a.length - b.length)
    
    answer.push(tuples[0][0])
    
    for (let i=1; i < tuples.length; i++) {
        let diff = tuples[i].filter(item => !tuples[i-1].includes(item))
        
        // tempSet = new Set (tuples[i-1])
        // let diff = tuples[i].filter(item=> !tempSet.has(item))
        
        answer.push(diff[0])
    }
    
    return answer;
}