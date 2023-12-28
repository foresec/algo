// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12953

function solution(arr) {
    let answer = 1;
    let now = 2
    
    while (now <= Math.max(...arr)) {
        
        // 나누기
        let check = false
        for (let i=0; i < arr.length; i++) {
            if(arr[i] % now === 0) {
                arr[i] /= now             
                check = true
            }
        }
        
        if (!check) {
            now += 1
        } else {
            answer *= now
        }
        
        // 모든 arr의 요소들이 1이면
        // if (arr.every((num => num === 1))) {
        //     break;
        // }
        
    }
    
    return answer;
}




// // 유클리드 호제법 사용
// // 최대 공약수(작은 수로 나눠서 나머지가 0이 될때의 b의 값)
// const gcd = (a, b) => {
//     let temp = a % b
//     // 종료 조건
//     if (temp === 0) {
//         return b;
//     }
    
//     return gcd(b, temp);
// };


// // 최소 공배수(두수의 곱/ 두수의 최대공약수)
// const lcm = (a, b) => {
//     return (a * b) / gcd(a, b)
//     };

// function solution(arr) {
//     let answer = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         answer = lcm(arr[i], answer);
//     }

//     return answer;
// }
