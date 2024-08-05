function findMin (adjList, end) {
    const q = [[end,0]]
    
    const dist = Array(adjList.length).fill(Infinity)
    dist[end] = 0
    
    while (q.length>0) {
        let [node, depth] = q.shift()
        
        for (let next of adjList[node]) {
            if (dist[next] === Infinity) {
                dist[next] = depth +1
                q.push([next, depth+1])
            }
        }
    }
    return dist
    
}

// sources의 원소 순대로 강철부대로 복귀할 수 있는 최단시간을 담은 배열
function solution(n, roads, sources, destination) {
    const adjList = Array(n+1).fill().map(()=>[])
    
    
    for (const [s,e] of roads) {
        adjList[s].push(e)
        adjList[e].push(s)
    }
    
    let dist = findMin(adjList, destination)
    
    let answer = sources.map(source => dist[source] !== Infinity ? dist[source] : -1)
    return answer;
}