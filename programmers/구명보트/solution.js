// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/42885?language=javascript

function solution(people, limit) {
    let answer = 0;
    
    people.sort((a,b) => a - b)
    
    let left = 0
    let right = people.length - 1
    while (left <= right) {
        
        // 최대 무게를 count (+최소 무게를 동시에 태울 수 있는지 판단)
        if (people[right] + people[left] <= limit) {
                left += 1
        }
        
        right -= 1
        answer += 1
    }
    
    return answer;
}