
function dfs(temp, ratios, discountList, depth) {
    if (depth === temp.length) {
        discountList.push([...temp]);
        return;
    }
    for (let ratio of ratios) {
        temp[depth] = ratio;
        dfs(temp, ratios, discountList, depth + 1);
        temp[depth] = 0;
    }
}

function solution(users, emoticons) {
    let answer = [0, 0];
    
    // 할인 조합 생성
    const ratios = [10, 20, 30, 40];
    let temp = Array(emoticons.length).fill(0)
    const discountList = [];
    dfs(temp, ratios, discountList, 0);

    for (let d = 0; d < discountList.length; d++) {
        let plusUser = 0;
        let total = 0;
        let now = discountList[d]

        for (let user of users) {
            let cost = 0;
            for (let i = 0; i < emoticons.length; i++) {
                if (now[i] >= user[0]) {
                    cost += emoticons[i] * ((100 - now[i]) / 100);
                }
            }
            
            // 할인해도 더 비싸면(이상) 
            if (user[1] <= cost) {
                plusUser++;
            } else {
                total += cost;
            }
        }

        if (plusUser > answer[0] || (plusUser === answer[0] && total > answer[1])) {
            answer = [plusUser, total];
        }
    }

    return answer;
}


