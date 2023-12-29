// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/76502?language=javascript

function solution(s) {
    
    let answer = 0;
    const len_s = s.length
    
    let complete = new Map()
    complete.set('(', ')')
    complete.set('{', '}')
    complete.set('[', ']')
    
    
    
    for (let i=0; i < len_s; i++) {
        
        // (추가적으로) 처음부터 닫혀있을 경우 성립할 수 없으니 continue 
        if ( ["]", "}", ")"].includes(s[i]) ) {
            continue
        }
        
        
        let stack = []
        for (let j = 0; j < len_s; j++) {
            let temp = s[(i+j) % len_s]
            
            // stack이 없을 경우 추가하고 push 및 continue
            if (!stack.length) {
                stack.push(temp)
                continue
            }

        
            // stack과비교해서 해당 괄호의 짝이 맞춰지면 pop, 아니면 push  
            if (complete.get(stack[stack.length-1]) === temp) {
                stack.pop()
            } else {
                stack.push(temp)
            }
            
        }
        
        // stack에 남아있는게 없다면 횟수 카운트 
        if (!stack.length) {
            answer++
        }
        
    }
    
    
    return answer;
}