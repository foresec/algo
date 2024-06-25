// function solution(people, limit) {
//     let answer = 0;
    
//     people.sort((a,b) => a - b)
    
//     let left = 0
//     let right = people.length - 1
//     while (left <= right) {
        
//         // 최대 무게를 count (+최소 무게를 동시에 태울 수 있는지 판단)
//         if (people[right] + people[left] <= limit) {
//                 left += 1
//         }
        
//         right -= 1
//         answer += 1
//     }
    
//     return answer;
// 




// 최대한 적은 수의 구명보트
// 한번에 최대 2명, 무게제한 있음
function solution(people, limit) {
    let answer = 0;
    people.sort((a, b) => a-b) 

    let one = 0
    let two = people.length -1
    
    while (one <= two) {
        // 매번 새로운 배를 가져오는데,
        // 가장 무거운 사람부터 태우고 가벼운 사람을 추가로 채울수 있는지 체크
        if (people[two] + people[one] <= limit ){
            one += 1
        } 
        // 그다음 배
        two -= 1
        answer += 1
        
    }
    
    return answer;
}