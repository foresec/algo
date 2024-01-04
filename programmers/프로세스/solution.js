// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/42587?language=javascript

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

// function solution(priorities, location) {
//     let answer = 0;
    
//     while (true) {
//         const maxPriority = Math.max(...priorities);
//         const current = priorities.shift();

//         if (current === maxPriority) {
//             // 현재 요소가 최대 우선순위인 경우
//             answer++;

//             if (location === 0) {
//                 // 목표 지점에 도달한 경우
//                 break;
//             }
//         } else {
//             // 현재 요소가 최대 우선순위가 아닌 경우 배열 끝으로 이동
//             priorities.push(current);
//         }

//         location = (location - 1 + priorities.length) % priorities.length;
//     }

//     return answer;
// }
