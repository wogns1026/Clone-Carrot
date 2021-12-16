# Clone-Carrot

## 프로젝트 설명

- [당근마켓](https://www.daangn.com/?pid=GoogleSA&c=GoogleKeywordAd&af_channel=Google&af_prt=emnet&af_keywords=&af_adset=Dynamic) Clone 프로젝트

- 역할
  - Front-end : snowman95
  - Back-end : wogns1026

## 화면

- [x] / : 메인 화면
- [x] /top_trade_posts : 중고거래 인기 매물 목록
- [x] /trade_post/:id : 중고거래 매물 정보
- [ ] /neighbor_post/:id : 동네 정보
- [ ] /search/:id : 검색 화면 → 검색어와 관련된 매물/동네 정보
- [ ] /top_search_terms : 인기 검색어
- [ ] /full_image/:id : 전체 화면 크기의 이미지
- [ ] /user/:id : 유저 정보

## 컴포넌트

### Semantic

- [x] Header (header, 100%, 71px) : 페이지 상단에 고정된 헤더
- [x] Footer (footer, 100%, 550px) : 페이지 하단 푸터

### Banner

- [x] MainBanner (section) : 메인 화면 일반배너
- [x] TradeBanner (section) : 메인 화면 중고거래 인기매물 배너
- [x] TopSearchTermsBanner (section) : 메인 화면 중고거래 인기검색어 배너
- [x] TradeFilterBanner (section) : 필터 기능을 가진 중고거래 인기매물 배너
- [x] TradePostDetailBanner (section) : 거래 정보 배너(제목,제품분류,게시시간,가격,내용,관심수,조회수)

### universal

- [x] ContentContainer (section, 외부100%/내부1024px, 160px) : 원하는 방향 n개 HTML element 배치
- [x] Content (div, 490px, auto) : col방향 n개의 HTML element(text,button,list) 종합 컨텐츠
- [x] LinkContentList (div,100%, auto) : row 방향 n개 <span style="color:green">LinkContent</span> 배치
- [x] LinkContent (div, auto, auto) : col 방향 n개 Link 배치
- [x] DropdownMenuContainer (section, 100%, 45px) : row방향 <span style="color:green">DropDownMenu</span> 를 담는 컨테이너
- [x] DropdownMenu (input, 180px, 45px) : 드랍다운 메뉴
- [x] ProgressBar (hr, auto, auto) : 진행도를 표시해주는 가로바
- [ ] HoriontalDivider (hr, auto, auto) : 가로줄
- [x] TextContent (div, auto, auto) : 텍스트 요소를 좀 더 편리하게 만들기 위한 컴포넌트
- [ ] FullImage (image, 100%, 100%) : 이미지를 담는 풀사이즈 컨테이너
- [ ] FixedContainer (div, 100%, 86px) : 고정된 요소를 담는 컨테이너

### Swiper

- [x] ImageSwiper (section, 100%, 500px) : 이미지 Swiper
- [x] ArrowSwiperButton (button, 30px, 100%) : 이미지 Swiper arrow 버튼
- [x] DotSwiperButton (button, 30px, 100%) : 이미지 Swiper Dot 버튼 리스트

### Search

- [x] Search (section, 393px, 40px) : 검색창
- [ ] RecommandSearchTerms (section) : 추천 검색어 목록

### Filter

- [x] LocationFilter (nav) : row방향 지역/동네/동 선택

### Poster

- [x] TradePosterList (section, 100%) : grid(nx4) 형태의 <span style="color:green">TradePoster</span> 배치
- [x] TradePoster (article, 210px) : col방향 제품정보(이미지,제목,가격,위치,관심수)
- [ ] NeighborPosterList (section) : col방향 <span style="color:green">NeighborPoster</span> 배치
- [ ] NeighborPoster (article) : col방향 동네정보(이미지,내용,위치)

### PosterDetail

- [ ] FullScreen (section) : 전체 화면 크기로 이미지 보기
- [ ] PosterDescription (section) : col방향 게시글정보
- [ ] PosterCommment (section) : col방향 댓글정보 (Profile,내용,시간,좋아요)

### Profile

- [x] Profile (section, 100%, auto) : row방향 사용자 프로필 (이미지,거주지,매너온도)
- [ ] LargeProfile (section) : row방향 사용자 프로필 (이미지,거주지,매너온도,재거래희망률)
- [ ] MannerList (section) : col방향 사용자 매너칭찬 리스트 별 횟수

## 기능

- [ ] **라우터**

  - [x] Header 로고 클릭시 <span style="color:blue">/</span> 이동
  - [x] TradePoster 클릭시 <span style="color:blue">/trade_post/:id</span> 이동
  - [ ] NeighborPoster 클릭시 <span style="color:blue">/neighbor_post/:id</span> 이동
  - [ ] HotSearchTerm 클릭시 <span style="color:blue">/search/:id</span> 이동
  - [ ] RecommandSearchTerm 클릭시 <span style="color:blue">/search/:id</span> 이동
  - [x] Search의 검색어 입력후 Enter 혹은 아이콘 클릭시 <span style="color:blue">/search/:id</span> 이동
  - [ ] FullImage 이미지 클릭시 <span style="color:blue">/full_image/:id</span> 이동

- [ ] **이미지**

  - [x] Swiper : <span style="color:green">ImageSlider</span> 로 이미지를 한 장씩 넘기며 보기
  - [ ] 전체화면 : 이미지 클릭시 <span style="color:green">FullImage</span> 화면으로 보여주기

- [ ] **필터**

  - [x] <span style="color:green">LocationFilter</span> 드랍다운 항목 선택시 필터 데이터 로드
  - [ ] <span style="color:green">UserFilter</span> 항목 선택시 필터 데이터 로드

- [ ] **다크모드** : 스위칭버튼으로 테마변경
- [ ] **인피니트 스크롤** : 스크롤 내릴때 마다 새로운 게시물 정보 불러오기

### 라이브러리

- react-route-dom
- styled-reset
- styled-components
- gh-pages
