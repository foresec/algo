// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12953?language=javascript

function solution(arr) {
    let answer = 1;
    let now = 2
    while (true) {
        
        // 나누기
        let check = false
        for (let i=0; i < arr.length; i++) {
            if(arr[i] % now === 0) {
                arr[i] /= now             
                check = true
            }
        }
        
        if (!check) {
            now += 1
        } else {
            answer *= now
        }
        
        // 모든 arr의 요소들이 1이면
        if (arr.every((num => num === 1))) {
            break;
        }
        
    }
    
    return answer;
}