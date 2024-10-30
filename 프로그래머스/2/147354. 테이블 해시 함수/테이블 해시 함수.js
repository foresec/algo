function solution(data, col, row_begin, row_end) {
    let answer = 0;
    
    data.sort((a,b)=>{
        if (a[col-1] !== b[col-1]) {
            return a[col-1] - b[col-1]
        } else {
            return b[0]-a[0]
        }
    })
    
    const siList = Array(data.length).fill(0)
    
    // S_i
    for (let i =0;i<data.length;i++) {
        let temp = 0
        for (let j = 0;j<data[0].length;j++) {
            temp += data[i][j] % (i+1)
        }
        siList[i] = temp
    }

    
    // bitwise XOR 
    for (let i =row_begin-1;i<row_end;i++) {
        answer = answer ^ siList[i]
    }
    

    
    
    
    return answer;
}