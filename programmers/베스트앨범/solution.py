// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/42579

# 장르별로 2개씩 

def solution(genres, plays):
    answer = []
    cnt = len(genres)
    
    # 장르별 다수 dict / 장르별 곡 정보 dict
    g_dict = {}
    for i in range(cnt):
        if genres[i] in g_dict:
            g_dict[genres[i]] += plays[i]
        else:
            g_dict[genres[i]] = plays[i]
                      
    song_dict = {}
    for i in range(cnt):
        if genres[i] in song_dict:
            song_dict[genres[i]].append((i, plays[i]))
        else:
            song_dict[genres[i]] = [(i, plays[i])]
            
    # 2,3 조건 정렬        
    for genre in g_dict:
        song_dict[genre] =  sorted(song_dict[genre], key=lambda x: (-x[1], x[0]))
            
    # 1조건 정렬        
    sg_dict = sorted(g_dict.keys(), key=lambda x : -g_dict[x])
    
    for genre in sg_dict:
        songs = song_dict[genre]
        for i in range(min(2, len(songs))):
            answer.append(songs[i][0])
            

    return answer