function getBasicFromBody(page, word) {
    const bStart = page.indexOf('<body>');
    const bEnd = page.indexOf('</body>', bStart);
    
    if (bStart === -1 || bEnd === -1) return 0;
    
    let bodyContent = page.substring(bStart + '<body>'.length, bEnd);
    bodyContent = bodyContent.toLowerCase();
    const lowerWord = word.toLowerCase();

    const words = bodyContent.split(/[^a-zA-Z]/);
    let cnt = 0;

    for (const w of words) {
        if (w === lowerWord) {
            cnt++;
        }
    }

    return cnt;
}


function findMyUrl(page) {
    const start = page.indexOf('<meta property="og:url" content="')
    if (start === -1) return ""
    const contentStart = start+'<meta property="og:url" content="'.length
    const contentEnd = page.indexOf('"', contentStart)
    const myLink = page.substring(contentStart, contentEnd)
    return myLink
    
}

function findConnectedUrl(page){
    let links = []
    let start = 0
    let contentStart = 0
    
    while (true) {
        start =  page.indexOf('<a href="', start)
        if (start  ===-1) break
        
        contentStart = start + '<a href="'.length
        const contentEnd = page.indexOf('"', contentStart)
        const link = page.substring(contentStart, contentEnd)
        links.push(link)
        
        start = contentEnd + 1
        
    }
    return links
}

// 기본점수 : 텍스트 중 검색어 등장 횟수(대소문자 무시)
// 외부링크 수 : 해당 웹페이지에서 다른 외부페이지로 연결된 링크 갯수
// 링크점수 : 링크가 걸린 다른 웹페이지 기본점수 / 외부 링크 수
// 매칭점수 : 기본점수  + 링크점수
function solution(word, pages) {

    let len = pages.length
    const ownLinks = Array(len).fill()
    const relatedLinks = Array(len).fill()
    const basicScores = Array(len).fill(0)
    const linkScores = Array(len).fill(0)
    const relatedLinkCnt = Array(len).fill(0)
    const matchScores = Array(len).fill(0)
    
    for (let i=0;i<len;i++) {
        let page = pages[i]
        
        // 1. 자기 자신의 링크 추출
        ownLinks[i] = findMyUrl(page)
        
        // 2. 외부링크 저장
        relatedLinks[i] = findConnectedUrl(page)
        
        // 3. 기본점수 : body태그 내 단어 등장횟수
        basicScores[i] = getBasicFromBody(page, word)   
        
    }
    
    // 4. 링크점수
    for (let i = 0;i<len;i++) {
        relatedLinkCnt[i] = relatedLinks[i].length
    }

    for (let i = 0;i<len;i++) {
        for (let j = 0; j < len; j++) {
            if (relatedLinks[i].includes(ownLinks[j])) {
                linkScores[j] += basicScores[i] / relatedLinkCnt[i]
            }
        }
    }

    // 5. 매칭점수
    for (let i=0;i<len;i++) {
        matchScores[i] =  basicScores[i] + linkScores[i]
    }
    
    
    // 6. 최종
    let ans = 0
    let maxVal = -1
    for (let i =0; i<len;i++) {
        if (matchScores[i] > maxVal) {
            maxVal = matchScores[i]
            ans = i
        }
    }
    
    return ans;
}