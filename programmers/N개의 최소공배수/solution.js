// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12953?language=javascript

function solution(arr) {
    let answer = 1;
    let now = 2
    while (true) {
        
        let cnt = 0
        for (num of arr) {
            // 전부 1이라면
            if (num === 1){
                cnt += 1
            }
        }
        
        if (cnt === arr.length) {
            break
        }
        
        // 나누기
        let check = false
        for (let i=0;i<arr.length;i++) {
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
        
    }
    
    return answer;
}