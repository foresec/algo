// // 밑 코드보다 이게 더 빠름
// function solution(clothes) {
//     let answer = 0;
//     let cloMap = new Map()
//     for (let item of clothes) {
//         // 없으면 key, value
//         if (!cloMap.has(item[1])) {
//             cloMap.set(item[1], 1)
//         } else {
//             // 있으면 value +1
//             let tempVal = cloMap.get(item[1])
//             cloMap.set(item[1], tempVal + 1)
//         }    
//     }
    
//     // 각 카테고리의 갯수 + 1을 해서 입지 않는 경우를 더해줌
//     let cnt = 1
//     for (val of cloMap.values()) {
//         cnt *= (val + 1)
//     }
    
//     // 마지막으로 하나도 입지 않는 경우 1가지를 뺌
//     answer += (cnt - 1)
    
//     return answer;
// }


    
    // 기본적으로 이렇게 바로 배열을 Map형태로 바꿀 수 있음
    // let cloMap = new Map(clothes)
    // map메서드를 활용하여 key, value값 변환
    // let cloMap = new Map(clothes.map( item => [item[1], item[0]]));


// 더 간소화된 코드

// function solution(clothes) {
//     let answer = 0;
//     let cloMap = new Map()

//     for (let [, key] of clothes) {
//         cloMap.set(key, (cloMap.get(key) || 0) + 1);
//     }
    
//     // 각 카테고리의 갯수 + 1을 해서 입지 않는 경우를 더해줌
//     let cnt = 1
//     for (val of cloMap.values()) {
//         cnt *= (val + 1)
//     }
    
//     // 마지막으로 하나도 입지 않는 경우 1가지를 뺌
//     answer += (cnt - 1)
    
//     return answer;
// }


function solution(clothes) {
    let clothesMap = new Map()
    
    for (let [_, key] of clothes) {
        clothesMap.set(key, (clothesMap.get(key) || 0) + 1);
    }
    
    let cnt = 1
    for (const val of clothesMap.values()) {
        cnt *= (val+1)
    }
    
    
    return cnt -1
}
