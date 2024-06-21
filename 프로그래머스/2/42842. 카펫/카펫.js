function solution(brown, yellow) {
    let answer = [0, 0];
    let maxV = Math.max(brown, yellow)
    
    for (let i = 1; i < maxV ; i++) {
        if (yellow % i === 0) {
            
            let w = i + 2
            let l = (yellow / i) + 2

            if (2 * (w + l - 2) === brown) {      
                return w >= l ? [w, l] : [l,w]
            }
        } 
    }
}