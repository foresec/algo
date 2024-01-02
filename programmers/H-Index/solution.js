// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/42747?language=javascript

function solution(citations) {
    let answer = 0;
    // 최댓값을 찾아야 하므로 내림차순 정렬 후
    citations.sort((a,b) => b - a)
        
    // 인용횟수가 h인덱스 이상일 때 update
    for (let i=1; i < citations.length + 1;i++) {
        if (citations[i-1] >= i){
            answer ++
        } 
    }
    return answer;
}


// function solution(citations) {
//     citations.sort((a, b) => b - a);

//     const answer = citations.filter((citation, index) => citation >= index + 1).length;

//     return answer;
// }
