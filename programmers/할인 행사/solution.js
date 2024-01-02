// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/131127

// function solution(want, number, discount) {
//     let answer = 0;
    
//     // productMap에 저장 
//     let productMap = new Map(want.map((key, idx)=> [key, number[idx]]))

//     // 10칸 이내이므로 -9
//     for (let i = 0; i < discount.length - 9 ; i++) {
//         let temp = discount.slice(i, i + 10)
//         let check = true

//         // 비교에서 갯수 성립 못하면 break
//         for (const [key, val] of productMap.entries()) {
//             if (temp.filter(item => item === key).length !== val) {
//                 check = false
//                 break
//             } 
//         }
        
//         // want 갯수만큼 cnt를 충족하면
//         if (check) {
//             answer++
//         }
        
//     }
    
//     return answer;
// }

function solution(want, number, discount) {
    const discountMap = new Map();
    
    let count = 0;
    
    for (let i = 0; i < discount.length; i += 1) {
        discountMap.set(discount[i], discountMap.get(discount[i]) + 1 || 1);
        // console.log(discountMap, "up")
        if (i < 9) continue;

        discountMap.set(discount[i - 10], discountMap.get(discount[i - 10]) - 1);   
        // console.log(discountMap, "d")
        let flag = false;
        for (let i = 0; i < want.length; i += 1) {
            if (discountMap.get(want[i]) !== number[i]) {
                flag = true;
                break;
            }
        }
    
        if (!flag) count += 1;
    
        // flag = false;
    }
    
    return count;
}
