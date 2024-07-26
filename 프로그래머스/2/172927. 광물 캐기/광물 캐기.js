// 작업을 끝내기까지 최소한의 피로도
// 
function solution(picks, minerals) {
    let answer = 0;
    let len = minerals.length
    let check = []
    let mineralCheck = [0,0,0]
    
    let picksCnt = picks.reduce((acc, cur) => acc + cur, 0);
   
    let idx = 1
    while (true) {
        
        if (minerals[idx-1] === "diamond") {
            mineralCheck[0] += 1
        } else if (minerals[idx-1] === "iron") {
            mineralCheck[1] += 1
        } else {
            mineralCheck[2] += 1
        }
        
        if ((idx % 5) === 0) {
            check.push(mineralCheck) 
            mineralCheck = [0,0,0]
        }
        
        if (idx > picksCnt * 5) {
            
            break
        }
        
        if (idx === len ) {
            check.push(mineralCheck)
            break
        }
        
        idx++
    }
    
    check.sort((a, b) =>{
        if (a[0] !== b[0]) {
            return b[0] - a[0]
        } else if (a[1] !== b[1]) {
            return b[1] - a[1]
        } 
    })
    
    
    for (const [d, i ,s] of check) {

        if (picks[0] > 0) {
            answer += d + i + s 
            picks[0] -= 1
        } else if (picks[1] > 0) {
            answer += 5 * d +i + s
            picks[1] -= 1
        } else if (picks[2] > 0) {
            answer += 25 * d + 5 * i + s
            picks[2] -= 1
        }
    }
    
    return answer;
}