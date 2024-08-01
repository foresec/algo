function extractUrl(page) {
    const urlPattern = /<meta property="og:url" content="([^"]*)"/;
    const urlMatch = page.match(urlPattern);
    return urlMatch ? urlMatch[1] : null;
}

function extractLinks(page) {
    const linkPattern = /<a href="([^"]*)"/g;
    const links = [];
    let linkMatch;
    while ((linkMatch = linkPattern.exec(page)) !== null) {
        links.push(linkMatch[1]);
    }
    return links;
}

function calculateBasicScore(bodyText, wordPattern) {
    return (bodyText.match(wordPattern) || []).length;
}

function calculateLinkScores(pageData, pageLinks) {
    for (const [pageUrl, links] of pageLinks.entries()) {
        const currentPageData = pageData.get(pageUrl);
        if (currentPageData && currentPageData.outLinksCount > 0) {
            const linkScore = currentPageData.basicScore / currentPageData.outLinksCount;
            for (const link of links) {
                const linkedPageData = pageData.get(link);
                if (linkedPageData) {
                    linkedPageData.totalScore += linkScore;
                }
            }
        }
    }
}

function calculateFinalScores(pageData) {
    for (const [url, data] of pageData.entries()) {
        data.totalScore += data.basicScore;
    }
}


function solution(word, pages) {
    const numOfPages = pages.length;
    const pageData = new Map();
    const pageLinks = new Map();
    
    const wordPattern = new RegExp(`\\b${word}\\b`, 'gi');
    
    for (let i = 0; i < numOfPages; i++) {
        const page = pages[i];
        
        // URL 추출(https://example.com 형태)
        const url = extractUrl(page);
        
        if (url) {
            // 연결된 a태그 추출(https://example.com 형태를 담은 리스트 추출)
            const links = extractLinks(page);
            pageLinks.set(url, links);
            
            // body 태그 내용 추출
            const bodyMatch = page.split('<body>')[1]?.split('</body>')[0];
            
            if (bodyMatch) {
                // 숫자제거
                const cleanBodyText = bodyMatch.replace(/[^a-zA-Z\s]/g, ' ');
                const basicScore = calculateBasicScore(cleanBodyText, wordPattern);
                
                pageData.set(url, {
                    idx: i,
                    basicScore,
                    outLinksCount: links.length,
                    totalScore: 0
                });
            }
        }
    }

    calculateLinkScores(pageData, pageLinks);
    calculateFinalScores(pageData);
    
    
    let maxScore = -Infinity;
    let resultIdx = -1;
    for (const [url, data] of pageData.entries()) {
        if (data.totalScore > maxScore || (data.totalScore === maxScore && data.idx < resultIdx)) {
            maxScore = data.totalScore;
            resultIdx = data.idx;
        }
    }
    
    return resultIdx;
    
}
