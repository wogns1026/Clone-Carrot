import { useAxios } from "Hooks/useAxios";
import main1 from "images/main1.png";
import main2 from "images/main2.png";
import main3 from "images/main3.png";
import main4 from "images/main4.png";
import icon from "images/search_icon.svg";

export const icons = {
  facebook:
    "https://d1unjqcospf8gs.cloudfront.net/assets/home/base/footer/icon-facebook-0563f4a93852d073b41f13b8bcabb03d47af3bb3a6755cdfedd8a73686c7f18c.svg",
  instagram:
    "https://d1unjqcospf8gs.cloudfront.net/assets/home/base/footer/icon-instagram-2f6c88a461597907c114b7ce28eab053fcae791ed26417915fefb6f7c9f95756.svg",
  blog: "https://d1unjqcospf8gs.cloudfront.net/assets/home/base/footer/icon-blog-e1b0d512d1766a6962ec5bbb5b0803d2a6a9c55ad97db5ba9eebb76013caceba.svg",
};

export const getBannerData = () => [
  {
    bgColor: "#FBF7F3",
    direction: "row",
    title: `당신 근처의
당근마켓`,
    description: `중고 거래부터 동네 정보까지, 이웃과 함께해
가깝고 따뜻한 당신의 근처를 만들어요.`,
    imgSrc: main1,
    btn: [],
    list: [],
  },
  {
    bgColor: "white",
    direction: "row-reverse",
    title: `우리 동네
중고 직거래 마켓`,
    description: "동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.",
    imgSrc: main2,
    btn: [
      { title: "인기매물 보기", url: "/top_trade_posts" },
      { title: "믿을 수 있는 중고거래", url: "/trust" },
    ],
    list: [],
  },
  {
    bgColor: "#E6F3E6",
    direction: "row",
    title: `이웃과 함께 하는
동네생활`,
    description: "우리 동네의 다양한 이야기를 이웃과 함께 나누어요.",
    imgSrc: main3,
    btn: [],
    list: [
      {
        title: "우리동네질문",
        description: `궁금한 게 있을 땐
이웃에게 물어보세요.`,
        imgSrc: icon,
      },
      {
        title: "동네분실센터",
        description: `무언가를 잃어버렸을 때, 
함께 찾을 수 있어요.`,
        imgSrc: icon,
      },
      {
        title: "동네모임",
        description: `관심사가 비슷한 이웃과 
온오프라인으로 만나요.`,
        imgSrc: icon,
      },
    ],
  },
  {
    bgColor: "white",
    direction: "row-reverse",
    title: `내 근처에서 찾는
동네가게`,
    description: `우리 동네 가게를 찾고 있나요? 
동네 주민이 남긴 진짜 후기를 함께 확인해보세요!`,
    imgSrc: main4,
    btn: [{ title: "당근마켓 동네가게 찾기", url: "/neighborMarket" }],
    list: [],
  },
];

export const getTopSearchData = () => [
  { text: "자전거" },
  { text: "캠핑" },
  { text: "패딩" },
  { text: "의자" },
  { text: "냉장고" },
  { text: "노트북" },
  { text: "이어폰" },
  { text: "난로" },
  { text: "컴퓨터" },
  { text: "아이패드" },
];

export const getCityData = () => ({
  서울특별시: [
    "종로구",
    "중구",
    "용산구",
    "성동구",
    "광진구",
    "동대문구",
    "중랑구",
    "성북구",
    "강북구",
    "도봉구",
    "노원구",
    "은평구",
    "서대문구",
    "마포구",
    "양천구",
    "강서구",
    "구로구",
    "금천구",
    "영등포구",
    "동작구",
    "관악구",
    "서초구",
    "강남구",
    "송파구",
    "강동구",
  ],
  부산광역시: [
    "중구",
    "서구",
    "동구",
    "영도구",
    "부산진구",
    "동래구",
    "남구",
    "북구",
    "강서구",
    "해운대구",
    "사하구",
    "금정구",
    "연제구",
    "수영구",
    "사상구",
    "기장군",
  ],
  대구광역시: [
    "중구",
    "동구",
    "서구",
    "남구",
    "북구",
    "수성구",
    "달서구",
    "달성군",
  ],
  인천광역시: [
    "중구",
    "동구",
    "미추홀구",
    "연수구",
    "남동구",
    "부평구",
    "계양구",
    "서구",
    "강화군",
    "옹진군",
  ],
  광주광역시: ["동구", "서구", "남구", "북구", "광산구"],
  대전광역시: ["동구", "중구", "서구", "유성구", "대덕구"],
  울산광역시: ["중구", "남구", "동구", "북구", "울주군"],
  세종특별자치시: [],
  경기도: [
    "수원시",
    "수원시 장안구",
    "수원시 권선구",
    "수원시 팔달구",
    "수원시 영통구",
    "성남시",
    "성남시 수정구",
    "성남시 중원구",
    "성남시 분당구",
    "의정부시",
    "안양시",
    "안양시 만안구",
    "안양시 동안구",
    "부천시",
    "광명시",
    "동두천시",
    "평택시",
    "안산시",
    "안산시 상록구",
    "안산시 단원구",
    "고양시",
    "고양시 덕양구",
    "고양시 일산동구",
    "고양시 일산서구",
    "과천시",
    "구리시",
    "남양주시",
    "오산시",
    "시흥시",
    "군포시",
    "의왕시",
    "하남시",
    "용인시",
    "용인시 처인구",
    "용인시 기흥구",
    "용인시 수지구",
    "파주시",
    "이천시",
    "안성시",
    "김포시",
    "화성시",
    "광주시",
    "양주시",
    "포천시",
    "여주시",
    "연천군",
    "가평군",
    "양평군",
  ],
  강원도: [
    "춘천시",
    "원주시",
    "강릉시",
    "동해시",
    "태백시",
    "속초시",
    "삼척시",
    "홍천군",
    "횡성군",
    "영월군",
    "평창군",
    "정선군",
    "철원군",
    "화천군",
    "양구군",
    "인제군",
    "고성군",
    "양양군",
  ],
  충청북도: [
    "청주시",
    "청주시 상당구",
    "청주시 흥덕구",
    "청주시 서원구",
    "청주시 청원구",
    "충주시",
    "제천시",
    "보은군",
    "옥천군",
    "영동군",
    "증평군",
    "진천군",
    "괴산군",
    "음성군",
    "단양군",
  ],
  충청남도: [
    "천안시",
    "천안시 동남구",
    "천안시 서북구",
    "공주시",
    "보령시",
    "아산시",
    "서산시",
    "논산시",
    "계룡시",
    "당진시",
    "금산군",
    "부여군",
    "서천군",
    "청양군",
    "홍성군",
    "예산군",
    "태안군",
  ],
  전라북도: [
    "전주시",
    "전주시 완산구",
    "전주시 덕진구",
    "군산시",
    "익산시",
    "정읍시",
    "남원시",
    "김제시",
    "완주군",
    "진안군",
    "무주군",
    "장수군",
    "임실군",
    "순창군",
    "고창군",
    "부안군",
  ],
  전라남도: [
    "목포시",
    "여수시",
    "순천시",
    "나주시",
    "광양시",
    "담양군",
    "곡성군",
    "구례군",
    "고흥군",
    "보성군",
    "화순군",
    "장흥군",
    "강진군",
    "해남군",
    "영암군",
    "무안군",
    "함평군",
    "영광군",
    "장성군",
    "완도군",
    "진도군",
    "신안군",
  ],
  경상북도: [
    "포항시",
    "포항시 남구",
    "포항시 북구",
    "경주시",
    "김천시",
    "안동시",
    "구미시",
    "영주시",
    "영천시",
    "상주시",
    "문경시",
    "경산시",
    "군위군",
    "의성군",
    "청송군",
    "영양군",
    "영덕군",
    "청도군",
    "고령군",
    "성주군",
    "칠곡군",
    "예천군",
    "봉화군",
    "울진군",
    "울릉군",
  ],
  경상남도: [
    "창원시",
    "창원시 의창구",
    "창원시 성산구",
    "창원시 마산합포구",
    "창원시 마산회원구",
    "창원시 진해구",
    "진주시",
    "통영시",
    "사천시",
    "김해시",
    "밀양시",
    "거제시",
    "양산시",
    "의령군",
    "함안군",
    "창녕군",
    "고성군",
    "남해군",
    "하동군",
    "산청군",
    "함양군",
    "거창군",
    "합천군",
  ],
  제주특별자치도: ["제주시", "서귀포시"],
});

export const getShortCityName = () => ({
  서울특별시: "서울",
  부산광역시: "부산",
  대구광역시: "대구",
  인천광역시: "인천",
  광주광역시: "광주",
  대전광역시: "대전",
  울산광역시: "울산",
  세종특별자치시: "세종시",
  경기도: "경기도",
  강원도: "강원도",
  충청북도: "충북",
  충청남도: "충남",
  전라북도: "전북",
  전라남도: "전남",
  경상북도: "경북",
  경상남도: "경남",
  제주특별자치도: "제주",
});

export const boardApi = {
  // loading, content, pageable, error
  Search: ({ ...rest }) =>
    useAxios({
      url: `/board`,
      params: { ...rest },
    }),
  // loading, content, reviewList, error
  GetBoard: (id) =>
    useAxios({
      url: `/board/dtl/${id}`,
    }),
  // loading, success, error
  RegistBoard: (board) =>
    useAxios({
      method: "post",
      url: `/board`,
      data: { board },
    }),
  // loading, deleteCount, error
  DeleteBoard: (id) =>
    useAxios({
      method: "delete",
      url: `/board?boardId=${id}`,
    }),
};

export const articleApi = {
  // loading, content, pageable, error
  GetHotArticles: ({ ...rest }) =>
    useAxios({
      url: `/hot-articles`,
      params: { ...rest },
    }),
  // loading, data, error
  GetArticle: (id) =>
    useAxios({
      url: `/articles/${id}`,
    }),
  // loading, content, pageable, error
  Search: ({ id, ...rest }) =>
    useAxios({
      url: `/search/${id}`,
      params: { ...rest },
    }),
};

export const reviewApi = {
  // loading, success, error
  RegistReview: (review) =>
    useAxios({
      method: "post",
      url: `/review`,
      data: { review },
    }),
  // loading, status, error
  DeleteReview: (id) =>
    useAxios({
      method: "delete",
      url: `/review?reviewId=${id}`,
    }),
};

export const userApi = {
  // loading, sellItem, sellerInfo, buyReviews, error
  GetUser: (id) =>
    useAxios({
      url: `/seller-info/${id}`,
    }),
};
