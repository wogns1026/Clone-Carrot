# Clone-Carrot

## 프로젝트 설명

- [당근마켓](https://www.daangn.com/?pid=GoogleSA&c=GoogleKeywordAd&af_channel=Google&af_prt=emnet&af_keywords=&af_adset=Dynamic) Clone 프로젝트

- 역할
  - Front-end : snowman95
  - Back-end : wogns1026

## 화면

- / : 메인 화면
- /top_trade_posts : 중고거래 인기 매물 목록
- /trade_post/:id : 중고거래 매물 정보
- /neighbor_post/:id : 동네 정보
- /search/:id : 검색 화면 → 검색어와 관련된 매물/동네 정보
- /full_image/:id : 전체 화면 크기의 이미지
- /user/:id : 유저 정보

## 컴포넌트

### universal

- RowContainer (section): row방향 n개 HTML element를 배치
- ColContainer (section): col방향 n개 HTML element를 배치

### Search

- LocationFilter (nav) : row방향 지역/동네/동 선택
- UserFilter (nav) : row방향 지역/동네/동 선택
- Search (section) : 검색창
- HotSearchTerms (section) : 인기 검색어 목록
- RecommandSearchTerms (section) : 추천 검색어 목록

### Poster

- TradePosterList (section): grid(nx4) 형태의 <span style="color:green">TradePoster</span> 배치
- TradePoster (article): col방향 제품정보(이미지,제목,가격,위치,관심수)
- NeighborPosterList (section): col방향 <span style="color:green">NeighborPoster</span> 배치
- NeighborPoster (article): col방향 동네정보(이미지,내용,위치)

### PosterDetail

- ImageSlider (section): 앞/뒤로 이미지를 한 장씩 넘기며 볼 수 있게 배치
- FullImage (section): 전체 화면 크기로 이미지 보기
- PosterDescription (section): col방향 게시글정보 (제목,제품분류,게시시간,가격,내용,관심수,조회수)
- PosterCommment (section): col방향 댓글정보 (Profile,내용,시간,좋아요)

### Profile

- WideProfile (section): row방향 넓은 사용자프로필 (이미지,거주지,매너온도)
- Profile (section): row방향 사용자프로필 (이미지,거주지,매너온도,재거래희망률)
- MannerList (section): col방향 사용자 매너칭찬 리스트 별 횟수

## 기능

- [ ] **라우터**

  - [x] Header 로고 클릭시 <span style="color:blue">/</span> 이동
  - [ ] TradePoster 클릭시 <span style="color:blue">/trade_post/:id</span> 이동
  - [ ] NeighborPoster 클릭시 <span style="color:blue">/neighbor_post/:id</span> 이동
  - [ ] HotSearchTerm 클릭시 <span style="color:blue">/search/:id</span> 이동
  - [ ] RecommandSearchTerm 클릭시 <span style="color:blue">/search/:id</span> 이동
  - [x] Search의 검색어 입력후 Enter 혹은 아이콘 클릭시 <span style="color:blue">/search/:id</span> 이동
  - [ ] FullImage 이미지 클릭시 <span style="color:blue">/full_image/:id</span> 이동

- [ ] **이미지**

  - [ ] 슬라이더 : <span style="color:green">ImageSlider</span> 로 이미지를 한 장씩 넘기며 보기
  - [ ] 전체화면 : 이미지 클릭시 <span style="color:green">FullImage</span> 화면으로 보여주기

- [ ] **필터**

  - [ ] <span style="color:green">LocationFilter</span> 드랍다운 항목 선택시 필터 데이터 로드
  - [ ] <span style="color:green">UserFilter</span> 항목 선택시 필터 데이터 로드

- [ ] **다크모드** : 스위칭버튼으로 테마변경
- [ ] **인피니트 스크롤** : 스크롤 내릴때 마다 새로운 게시물 정보 불러오기

### 라이브러리

- react-route-dom
- styled-reset
- styled-components
- gh-pages
