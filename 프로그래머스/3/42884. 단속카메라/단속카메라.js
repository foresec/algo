// 모든 차량이 한번은 단속용 카메라를 만나도록 하려면 최소 몇대의 카메라를 설치해야하는가
function solution(routes) {
    let answer = 0;
    // 경로를 시작 지점 기준 정렬
    routes.sort((a, b) => a[0] - b[0]);
    
    let cameras = [];
    
    for (let [start, end] of routes) {
        // 카메라가 없거나, 마지막 카메라가 시작 지점보다 작은 경우
        if (cameras.length === 0 || cameras[cameras.length - 1] < start) {
            // 최대한 마지막 지점에 새 카메라 설치
            cameras.push(end);
            answer += 1;
        } else {
            // 기존 카메라 위치를 업데이트 (최솟값으로 조정)
            cameras[cameras.length - 1] = Math.min(cameras[cameras.length - 1], end);
        }
    }
    
    return answer;
}
