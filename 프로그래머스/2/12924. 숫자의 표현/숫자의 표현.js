function solution(n) {
    let answer = 1;
    
    const last = n / 2 
    let start = 1;
    let end = 1;
    let total = 1;
    
    if (n < 3) {
        return answer
    }

    while (start < last) {
        if (total < n) {
            end++;
            total += end;
        } else if (total > n) {
            total -= start;
            start++;
        } else {
            answer++;
            total -= start;
            start++;
        }
    }

    return answer; 
}