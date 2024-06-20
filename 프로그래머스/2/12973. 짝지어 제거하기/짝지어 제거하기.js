function solution(s) {

    let stack = []
    
    for (let i = 0; i < s.length; i++) {
        
        if (stack.length > 0) {
            let a = stack.pop() 
            if (a !== s[i]) {
                stack.push(a)
                stack.push(s[i])
            }
        } else {
            stack.push(s[i])
        }
    }
    
    return stack.length === 0 ? 1:0
}