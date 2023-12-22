// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12973?language=javascript

function solution(s) {
    let answer = 0
    let stack = []
    
    
    // stack을 써서 남아있는 바로 전 값과 비교
    for (alpha of s) {
        
        if (stack && stack[stack.length-1] === alpha) {
            stack.pop()
        }
        else {
            stack.push(alpha)
        }
    }
    
    // stack이 남은 수가 없다면 성공
    if (!stack.length) {
        answer = 1
    }
         
    return answer;
}