

// function solution(k, tangerine) {
//     let answer = 0;
//     let count = new Map()
    
//     // Map에 count
//     for (let t of tangerine) {
//         count.set(t, (count.get(t) ?? 0) + 1)
//     }
    
//     // value값대로 정렬한 리스트 반환
//     let sortedCount = [...count.values()].sort((a,b)=> b - a)
    
//     let temp = 0
//     for (let num of sortedCount) {
//         temp += num
//         answer++
        
//         if (temp >= k) {
//             break
//         }
        
//     }
    
//     return answer;
// }




function solution(k, tangerine) {
    
    const g = new Map()
    for (const t of tangerine) {
        g.set(t, (g.get(t) || 0) + 1);
        if (g.get(t) === k) break
    }
    
    const arrG = Array.from(g.values()).sort((a,b)=>b-a)
    
    let ans = 1
    let temp = 0
    for (let i=0;i<arrG.length;i++) {
        temp += arrG[i]
        
        if (temp >= k) {
            ans = i + 1
            break
        } 
    }
    return ans
}
