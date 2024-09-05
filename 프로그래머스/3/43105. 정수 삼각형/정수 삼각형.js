// 거쳐간 숫자의 합이 가장 클때

function solution(triangle) {
    const len = triangle.length
    
    for (let i = 1;i < len; i++) {
        for (let j = 0;j<i+1;j++) {
            
            if (j === 0) {
                // 왼쪽
                triangle[i][j] += triangle[i-1][j]
            } else if (j === i) {
                // 오른쪽
                triangle[i][j] += triangle[i-1][j-1]
            } else {
                // 중간
                triangle[i][j] += Math.max(triangle[i-1][j-1], triangle[i-1][j])
            }
        }
    }
    const answer = Math.max(...triangle[len-1])

    return answer;
}