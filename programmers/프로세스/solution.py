// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
    let answer = 0;
    
    let len = priorities.length
    let idx = 0
    
    while (true) {
    
        if (priorities[idx % len] == Math.max(...priorities)) {
            // 최대를 0으로 갱신하며 지워가는 과정
            priorities[idx % len] = 0
            // 그 과정을 거치면서 count
            answer++
            
            
            // location과 같으면 목표지점이므로 break
            if (location === idx % len) {
                break
            }
        }

        idx++
    }
    return answer;
}