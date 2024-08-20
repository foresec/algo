function calculate(sequence, flag) {
    let calculated = Array(sequence.length).fill()
    
    for (let i=0;i<sequence.length;i++) { 
        if (i % 2 === 0) {
           calculated[i] =  sequence[i] * flag
        } else {
           calculated[i] =  sequence[i] * -flag
        }
    }
    return calculated
}

// 연속 펄스 부분 수열의 합 중 가장 큰 것을 return
function solution(sequence) {
    let N  = sequence.length
    
    let s1 = calculate(sequence, 1)
    let s2 = calculate(sequence, -1)
    
    let current1 = s1[0]
    let ans1 = s1[0]
    let current2 = s2[0]
    let ans2 = s2[0]
    
    
    for (let i =1;i<N;i++) {
        current1 = Math.max(s1[i], current1 + s1[i])
        ans1 = Math.max(ans1, current1)
        
        current2 = Math.max(s2[i], current2 + s2[i])
        ans2 = Math.max(ans2, current2)

    }

    return Math.max(ans1, ans2)
}