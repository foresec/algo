function checkCross(stones, k, friendsCnt) {
    let cnt = 0
    
    // 해당 friends의 수 전부를 감당 가능한 징검다리인지 순서대로 검증
    for (const stone of stones) {
        if (stone >= friendsCnt) {
            cnt = 0
        } else {
            cnt++
            // 최대 칸수인 k보다 누적된 카운트이 커지면 실패
            if (cnt >= k) return false
        }
    }
    
    return true
}



// 디딤돌은 밟을때마다 -1, 0이되면 밟을 수 없어 한번에 여러칸을 건너 뛸수 있음
// 단, 가능한 디딤돌이 여러개인 경우 무조건 가장 가까운 디딤돌로만 건너뛸수있음
// 즉, 건너뛸수 없는 경우가 생김

// 한번에 하나씩만 건넘
// 최대 몇명까지 징검다리를 건널 수 있는지?
function solution(stones, k) {
    let answer = 0;
    
    // '프렌즈의 수'를 이진탐색으로 찾아나감
    // 최상의 경우, 가능한 최대수는 20000000
    let left = 1
    let right = 200000000
    
    while (left <= right) {
        
        const mid = Math.floor((left + right) / 2);

        // 중간수가 가능한 경우인지 체크
        if (checkCross(stones, k, mid)) {
            answer = mid
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return answer;
}