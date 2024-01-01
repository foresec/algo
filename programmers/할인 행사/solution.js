// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/131127

// function solution(want, number, discount) {
//     let answer = 0;
    
//     // productMap에 저장
//     let productMap = new Map(want.map((key, idx)=> [key, number[idx]]))

//     // 10칸 이내이므로 -9
//     for (let i = 0; i < discount.length - 9 ; i++) {
//         let temp = discount.slice(i, i + 10)
//         let cnt = 0

//         // 비교에서 갯수 성립 못하면 break
//         for (const [key, val] of productMap.entries()) {
//             if (temp.filter(item => item === key).length !== val) {
//                 break
//             } else {
//                 cnt++
//             }
//         }
        
//         // want 갯수만큼 cnt를 충족하면
//         if (cnt === want.length) {
//             answer++
//         }
        
//     }
    
//     return answer;
// }


function solution(want, number, discount) {
    let count = 0;
    for (let i = 0; i < discount.length - 9; i++) {
        const slice = discount.slice(i, i+10);

        let flag = true;
        for (let j = 0; j < want.length; j++) {
            if (slice.filter(item => item === want[j]).length !== number[j]) {
                flag = false;
                break;
            }
        }
        if (flag) count += 1;
    }
    return count;
}