function solution(board) {

    const row = board.length
    const col = board[0].length
    const dp = Array(row).fill().map(() => Array(col).fill(0))


    // 왼쪽 위 채우고
    for (let i = 0; i < row; i++) {
        dp[i][0] = board[i][0];
    }

    for (let j = 0; j < col; j++) {
        dp[0][j] = board[0][j];
    }

    let answer = 0
    for (let i =1;i < row;i++) {
        for (let j = 1;j < col;j++) {
            if (board[i][j] === 1) {
                // 셋중에 가장 낮은경우(최소조건!!!)에다가 + 1 
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
            }
        }
    }

    dp.forEach((r)=>{
        r.forEach((val)=>{
            answer = Math.max(answer, val)
        })
    })


    return answer ** 2
}
