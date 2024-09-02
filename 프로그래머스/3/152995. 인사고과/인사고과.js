function solution(scores) {
    const wanho = scores[0]
    let filtered = []

    scores.sort((a, b) => {
        if (a[0] !== b[0]) {
            return b[0] - a[0]
        } else {
            return a[1] - b[1]
        }
    });

    let maxVal = 0
    
    for (const score of scores) {
        

        if (score[1] >= maxVal) {
            filtered.push(score)
            maxVal = Math.max(maxVal, score[1])
        }
    }
    
    filtered.sort((a, b) => (b[0] + b[1]) - (a[0] + a[1]))
    

    for (let i = 0; i < filtered.length; i++) {
        const temp = filtered[i]
        if (temp[0] === wanho[0] && temp[1] === wanho[1]) {
            return i + 1
        }
    }
    
    return -1
}
