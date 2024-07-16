// function calculate(a, b, oper) {
//     let num1 = parseInt(a)
//     let num2 = parseInt(b)
    
//     if (oper === "+") {
//         return num1 + num2
//     } else if (oper === "-") {
//         return num1 - num2
//     } else if (oper ==="*") {
//         return num1 * num2
//     }
// }


// function permutate(arr) {
//   const result = [];

//   function dfs(currentArr, existedArr) {
 
//     if (existedArr.length === 0) {
//       result.push([...currentArr]);
//       return;
//     }
//     for (let i = 0; i < existedArr.length; i++) {
//       const current = [...currentArr, existedArr[i]];
//       const modified = existedArr.filter((_, idx) => idx !== i);
//       dfs(current, modified);
//     }
//   }
//   dfs([], arr);
//   return result;
// }



// // 문자열이 주어졌을 때, 우승시 받을 수 있는 가장 큰 금액(절댓값)
// // +, -, * 
// function solution(expression) {
//     let answer = 0;
//     let operator = ["+", "-", "*"]
//     const splitedArr =  expression.split(/([+\-*/])/);
//     const permutations = permutate(operator);
    
    
//     for (let i =0;i <permutations.length;i++) {
//         let temp = [...splitedArr]
//         permutations[i].forEach(oper=> {
            
//             while (temp.includes(oper)) {
//                 const idx = temp.indexOf(oper)
//                 if (idx === -1) break
//                 let result = calculate(temp[idx-1], temp[idx+1], oper)
//                 temp.splice(idx - 1, 3, result.toString())
//             }

//         })
//         let newVal = Math.abs(parseInt(temp[0]))
//         answer = Math.max(answer, newVal)
//     }
//     return answer;
// }

// 수식을 파싱하여 피연산자와 연산자를 분리하는 함수
function parse(expression) {
    let tmp = 0;
    let rst = [];
    
    for (let i = 0; i < expression.length; i++) {
        let c = expression[i];
        
        if (!isNaN(parseInt(c, 10))) {
            tmp = tmp * 10 + parseInt(c, 10);
        } else {
            rst.push(tmp);
            tmp = 0;
            rst.push(c);
        }
    }
    
    rst.push(tmp); // 마지막 피연산자 추가
    return rst.filter(el => el !== ''); // 빈 문자열 제거
}

// 주어진 연산자 우선순위 조합에 따라 계산하는 함수
function calculate(expression1, sequence) {
    let expression2 = [...expression1];
    
    for (let operator of sequence) {
        let i = 0;
        while (i < expression2.length) {
            if (expression2[i] === operator) {
                if (operator === '+') {
                    expression2[i - 1] += expression2[i + 1];
                } else if (operator === '-') {
                    expression2[i - 1] -= expression2[i + 1];
                } else if (operator === '*') {
                    expression2[i - 1] *= expression2[i + 1];
                }
                expression2.splice(i, 2); // 연산자와 우측 피연산자 제거
            } else {
                i++;
            }
        }
    }
    
    return Math.abs(expression2[0]);
}

function solution(expression) {
    let parsedExpression = parse(expression);
    let answer = 0;
    let operators = ['+', '-', '*'];
    
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (j === i) continue;
            let sequence = [operators[i], operators[j], operators[3 - i - j]];
            let result = calculate(parsedExpression, sequence);
            answer = Math.max(answer, result);
        }
    }
    
    return answer;
}


