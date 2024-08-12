function solution(n, works) {

    if (works.reduce((a, b) => a + b, 0) <= n) return 0;
    
    works.sort((a, b) => b - a);
    
    while (n > 0) {
        const max = works[0];
        
        for (let i = works.length - 1; i >= 0; i--) {
            if (works[i] >= max) {
                works[i]--;
                n--;
            }
            if (n === 0) break;
        }
        
        works.sort((a, b) => b - a);
    }
    
    // 야근 피로도를 계산합니다.
    return works.reduce((a, b) => a + Math.pow(b, 2), 0);
}