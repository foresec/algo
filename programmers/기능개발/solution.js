// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/42586?language=javascript

// function solution(progresses, speeds) { 
//     let answer = [];
    
//     let compare = progresses.map((item, idx) => Math.ceil((100 - item) / speeds[idx]))
    
//     let stack = []
    
//     for (const current of compare) {
//         if (stack.length > 0 && Math.max(...stack) < current) {
//             answer.push(stack.length);
//             stack = [];
//         }
        
//         stack.push(current);
//     }
    
//     if (stack.length > 0) {
//         answer.push(stack.length)
//     }
        
//     return answer;
// }


function solution(progresses, speeds) {
    let answer = [0];
    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    let maxDay = days[0];

    for(let i = 0, j = 0; i< days.length; i++){
        if(days[i] <= maxDay) {
            answer[j] += 1;
        } else {
            maxDay = days[i];
            answer[++j] = 1;
        }
    }

    return answer;
}