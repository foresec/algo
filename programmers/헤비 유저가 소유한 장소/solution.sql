// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/77487

-- 헤비유저찾기
# SELECT HOST_ID
# FROM PLACES
# GROUP BY HOST_ID
# HAVING COUNT(*) >= 2

SELECT *
FROM PLACES
WHERE HOST_ID IN (
    SELECT HOST_ID
    FROM PLACES
    GROUP BY HOST_ID
    HAVING COUNT(*) >= 2
)