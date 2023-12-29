// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/76502?language=javascript

function solution(s) {
    
    let answer = 0;
    const len_s = s.length
    
    let complete = new Map()
    complete.set('(', ')')
    complete.set('{', '}')
    complete.set('[', ']')
    
    
    
    for (let i=0; i < len_s; i++) {
        
        if ( ["]", "}", ")"].includes(s[i]) ) {
            continue
        }
        
        
        let stack = []
        for (let j = 0; j < len_s; j++) {
            let temp = s[(i+j) % len_s]
            

            if (!stack.length) {
                stack.push(temp)
                continue
            }
        
                     
            if (complete.has(stack[stack.length - 1]) && complete.get(stack[stack.length-1]) === temp) {
                stack.pop()
            } else {
                stack.push(temp)
            }
    
            
        }
         
        if (!stack.length) {
            answer++
        }
        
    }
    
    
    return answer;
}