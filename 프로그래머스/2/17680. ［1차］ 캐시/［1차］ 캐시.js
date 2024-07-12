function solution(cacheSize, cities) {
    let answer = 0;
    // idx 0인 곳이 오래된곳
    // 마지막인덱스가 최신
    let q = []
    
    if (cacheSize === 0) {
        return cities.length * 5
    }
    
    
    for (c of cities) {
        city = c.toLowerCase()
        
        if (!q.includes(city)) {
            // 만약 주어진 cache길이 보다 길면 오래된 것 제거
            if (q.length >= cacheSize) {
                q.shift()
            }
            q.push(city)
            answer += 5
            
        } else {     
            q = q.filter(item => item !== city)
            q.push(city)

            answer += 1
            
        }
        
    }
    
    return answer;
}



// function solution(cacheSize, cities) {
//     let answer = 0;
//     let q = [];
//     let oldIdx = 0;

//     if (cacheSize === 0) {
//         return cities.length * 5;
//     }

//     for (let i = 0; i < cities.length; i++) {
//         const city = cities[i].toLowerCase();

//         if (!q.includes(city)) {
//             if (q.length >= cacheSize) {
//                 // 오래된 값 자리에 새로운 값 업데이트
//                 q[oldIdx] = city;
//                 // 가장 오래된 값의 인덱스 갱신
//                 // 직접 적어보면 이 원리가 나옴
//                 oldIdx = (oldIdx + 1) % cacheSize; 
                
//             } else {
//                 // q의 자리가 충분하다면 그냥 push
//                 q.push(city);
//             }
//             answer += 5;
            
//         } else {
//             // Cache hit 시 인덱스를 찾아서 갱신
//             const hitIdx = q.indexOf(city);
//             q.splice(hitIdx, 1);
//             q.push(city);
//             answer += 1;
//         }
//     }

//     return answer;
// }
