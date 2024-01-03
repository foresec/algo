// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
    let answer = [];
    
    // 리스트 형태로 split하기
    lenS = s.length
    let tuples = s.substring(2, lenS-2).split("},{").map(item=> item.split(",").map(Number))
    
    
    // 정렬하기
    tuples.sort((a, b) => a.length - b.length)
    
    // 순서대로 push하기
    answer.push(tuples[0][0])
    
    // 연속된 두 배열을 비교해서 없는 수를 순차적으로 push해줌
    for (let i=1; i < tuples.length; i++) {
        
        // diff를 찾는데 이방법도 되지만 includes때문에 밑 방법보다 느림
        // let diff = tuples[i].filter(item => !tuples[i-1].includes(item))
        
        tempSet = new Set (tuples[i-1])
        let diff = tuples[i].filter(item=> !tempSet.has(item))
        
        answer.push(diff[0])
    }
    
    return answer;
}