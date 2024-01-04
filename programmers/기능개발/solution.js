// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/42586?language=javascript

function solution(progresses, speeds) {
    let answer = [];
    
    let compare = progresses.map((item, idx) => Math.ceil((100 - item) / speeds[idx]))
    
    let stack = []
    
    while (compare.length > 0) {
        
        if (stack.length > 0 && Math.max(...stack) < compare[0]) {
                        
            answer.push(stack.length)
            stack = []            
            
        } else {
            stack.push(compare.shift())
            
        }
            
    }
    
    if (stack.length > 0) {
        answer.push(stack.length)
    }
        
    return answer;
}