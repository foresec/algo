// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12980?language=javascript

function solution(n)
{
    // 맨처음 1이 필요
    let ans = 1;

    while (n > 1) {
        // 나머지가 있으면 
        if (n % 2 === 1) {
            n -= 1
            ans += 1
        } else {
            n /= 2
        }
    }

    return ans;
}