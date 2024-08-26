function solution (board, skill) {
    const row = board.length;
    const col = board[0].length;
    const changedVal = Array(row+1).fill().map(()=>Array(col+1).fill(0))

    skill.forEach(sk=>{
        const [type, r1, c1, r2, c2, degree] = sk;
        const change = type === 1 ? -degree : degree;
        changedVal[r1][c1] += change;
        changedVal[r2+1][c1] += -change;
        changedVal[r1][c2+1] += -change;
        changedVal[r2+1][c2+1] += change; 
    });
    
    for (let r = 0; r <= row; r++) { 
        for (let c = 1; c <=col; c++) {
            changedVal[r][c] += changedVal[r][c - 1];
        }
    }
    
    for (let r = 1; r <=row; r++) { 
        for (let c = 0; c <=col; c++) {
            changedVal[r][c] += changedVal[r - 1][c];
        }
    }
    
    let answer = 0
    board.forEach((row, r) => {
        row.forEach((val, c) => {
            if (val + changedVal[r][c] > 0) {
                answer++;
            }
        });
    });
    
    return answer
}