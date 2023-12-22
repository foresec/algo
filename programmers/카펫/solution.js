// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/42842?language=javascript

function solution(brown, yellow) {
    let answer = [];
    
    for (i = 1; i < yellow + 1; i += 1) {
        // yellow가 정수로 나눠질 때 비교해서 반영 
        if (!(yellow % i)) {
            let num1 = i
            let num2 = yellow / i
            if (brown === 2 * (num1 + num2 + 2)) {
                answer = [num2 + 2, num1 + 2]
                break
            }
        }
    }
    
    return answer;
}