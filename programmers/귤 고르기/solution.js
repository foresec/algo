// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/138476?language=javascript

function solution(k, tangerine) {
    let answer = 0;
    let count = new Map()
    
    // Map에 count
    for (let t of tangerine) {
        count.set(t, (count.get(t) ?? 0) + 1)
    }
    
    
    // value값대로 정렬한 리스트 반환
    let sortedCount = [...count.entries()].sort((a,b)=> b[1]- a[1])
    
    
    let temp = 0
    for (let num of sortedCount) {
        temp += num[1]
        answer++
        
        if (temp >= k) {
            break
        }
        
    }
    
    return answer;
}