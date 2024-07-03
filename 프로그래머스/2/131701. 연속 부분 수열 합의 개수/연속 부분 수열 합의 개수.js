function solution(elements) {
    let answer = 0;
    const len_num = elements.length
    const sum_list = new Set()
    
    
    for (let i = 0; i < len_num; i++) {
        let temp = 0
        for (let j = i; j < len_num + i; j++){
            temp += elements[j % len_num]

            sum_list.add(temp)
        }
        
    }
    answer = sum_list.size
    
    return answer;
}


// function solution(elements) {
//     const numbers = new Set();
    
//     for (let i = 1; i < elements.length; i += 1) {
//         let sum = elements.slice(0, i).reduce((acc, curr) => acc + curr);
        
//         numbers.add(sum);
        
//         for (let j = 0; j < elements.length; j += 1) {
//             sum += elements[(i + j) % elements.length] - elements[j];
//             numbers.add(sum);
//         }
//     }
    
//     return numbers.size;
// }



function solution(elements) {
    let check = new Set(elements)
    let len = elements.length
    
    for (let i=0;i<len;i++){
        let sumNum = 0
        for (let j= i;j<len + i;j++) {
            sumNum += elements[j % len]
            check.add(sumNum)
        }
        
    }
    
    return check.size
}
