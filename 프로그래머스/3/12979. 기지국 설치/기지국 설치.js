function solution(n, stations, w) {
    let answer = 0;
    let val = 2 * w + 1; 
    let idx = 1;  
    
    for (let i = 0; i < stations.length; i++) {
        // 해당 기지국의 커버범위를 활용해서 닿지 못하는 범위를 구함
        let left = stations[i] - w;  
        if (idx < left) {
            let temp = left - idx;
            // 커버 가능한 갯수 더하기
            answer += Math.ceil(temp / val);
        }
        // 다음 커버위치 업데이트
        idx = stations[i] + w +1
    }

    // 탐색과정에서 끝까지 도달 못했다면 나머지 부분 체크해서 더하기
    if (idx <= n) {
        let temp = n - idx + 1;
        answer += Math.ceil(temp / val);
    }

    return answer;
}
