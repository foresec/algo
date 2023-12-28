// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/138476


// 테스트 1 〉	통과 (8.75ms, 39.5MB)
// 테스트 2 〉	통과 (9.31ms, 39.5MB)
// 테스트 3 〉	통과 (8.18ms, 39.5MB)
// 테스트 4 〉	통과 (8.19ms, 39.5MB)
// 테스트 5 〉	통과 (9.02ms, 39.4MB)
// 테스트 6 〉	통과 (13.76ms, 39.5MB)
// 테스트 7 〉	통과 (13.90ms, 39.5MB)
// 테스트 8 〉	통과 (7.98ms, 39.4MB)
// 테스트 9 〉	통과 (8.05ms, 39.5MB)
// 테스트 10 〉	통과 (12.31ms, 39.6MB)
// 테스트 11 〉	통과 (0.21ms, 33.5MB)
// 테스트 12 〉	통과 (0.10ms, 33.5MB)
// 테스트 13 〉	통과 (0.09ms, 33.4MB)
// 테스트 14 〉	통과 (0.07ms, 33.4MB)
// 테스트 15 〉	통과 (0.12ms, 33.5MB)
// 테스트 16 〉	통과 (0.08ms, 33.5MB)
// 테스트 17 〉	통과 (0.08ms, 33.5MB)
// 테스트 18 〉	통과 (0.08ms, 33.4MB)
// 테스트 19 〉	통과 (0.07ms, 33.5MB)
// 테스트 20 〉	통과 (0.16ms, 33.4MB)
// 테스트 21 〉	통과 (0.47ms, 33.6MB)
// 테스트 22 〉	통과 (0.58ms, 33.6MB)
// 테스트 23 〉	통과 (0.45ms, 33.6MB)
// 테스트 24 〉	통과 (0.81ms, 33.6MB)
// 테스트 25 〉	통과 (5.64ms, 38.1MB)
// 테스트 26 〉	통과 (8.87ms, 39.9MB)
// 테스트 27 〉	통과 (28.17ms, 51.7MB)
// 테스트 28 〉	통과 (23.84ms, 45.5MB)
// 테스트 29 〉	통과 (27.12ms, 46.3MB)
// 테스트 30 〉	통과 (26.71ms, 51.4MB)
// 테스트 31 〉	통과 (8.36ms, 39.8MB)
// 테스트 32 〉	통과 (10.15ms, 40.2MB)
// 테스트 33 〉	통과 (31.13ms, 48.8MB)
// 테스트 34 〉	통과 (25.57ms, 45.7MB)


// function solution(k, tangerine) {
//     let answer = 0;
//     let count = new Map()
    
//     // Map에 count
//     for (let t of tangerine) {
//         count.set(t, (count.get(t) ?? 0) + 1)
//     }
    
//     // value값대로 정렬한 리스트 반환
//     let sortedCount = [...count.values()].sort((a,b)=> b - a)
    
//     let temp = 0
//     for (let num of sortedCount) {
//         temp += num
//         answer++
        
//         if (temp >= k) {
//             break
//         }
        
//     }
    
//     return answer;
// }


function solution(k, tangerine) {
    let answer = 0;
    let count = {};

    // 객체에 count
    for (let t of tangerine) {
        count[t] = (count[t] || 0) + 1;
    }

    // Object.values()를 사용하여 값들을 배열로 변환하고 정렬
    let sortedCount = Object.values(count).sort((a, b) => b - a);

    let temp = 0;
    for (let num of sortedCount) {
        temp += num;
        answer++;

        if (temp >= k) {
            break;
        }
    }

    return answer;
}

