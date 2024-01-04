// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/42586?language=javascript

function solution(progresses, speeds) { 
    let answer = [];
     
    let compare = progresses.map((item, idx) => Math.ceil((100 - item) / speeds[idx]))
    
    let stack = []
    
    for (const current of compare) {
        if (stack.length > 0 && Math.max(...stack) < current) {
            answer.push(stack.length);
            stack = [];
        }
        
        stack.push(current);
    }
    
    if (stack.length > 0) {
        answer.push(stack.length)
    }
        
    return answer;
}