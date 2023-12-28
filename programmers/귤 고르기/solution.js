// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/138476


function solution(k, tangerine) {
    let answer = 0;
    let count = new Map()
    
    // Map에 count
    for (let t of tangerine) {
        count.set(t, (count.get(t) ?? 0) + 1)
    }
    
    // value값대로 정렬한 리스트 반환
    let sortedCount = [...count.values()].sort((a,b)=> b - a)
    
    let temp = 0
    for (let num of sortedCount) {
        temp += num
        answer++
        
        if (temp >= k) {
            break
        }
        
    }
    
    return answer;
}

