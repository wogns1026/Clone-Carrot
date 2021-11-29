// import img1 from "images/img1.svg";
// import img2 from "images/img2.svg";
// import img3 from "images/img3.svg";
// import img4 from "images/img4.svg";

import main1 from "images/main1.png";
import main2 from "images/main2.png";
import main3 from "images/main3.png";
import main4 from "images/main4.png";
import icon from "images/search_icon.svg";

export const data = [
  {
    bgColor: "#FBF7F3",
    direction: "row",
    title: "당신 근처의 당근마켓",
    description:
      "중고 거래부터 동네 정보까지, 이웃과 함께해 가깝고 따뜻한 당신의 근처를 만들어요.",
    imgSrc: main1,
    btn: [],
    list: [],
  },
  {
    bgColor: "white",
    direction: "row-reverse",
    title: "우리 동네 중고 직거래 마켓",
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
    title: "이웃과 함께 하는 동네생활",
    description: "우리 동네의 다양한 이야기를 이웃과 함께 나누어요.",
    imgSrc: main3,
    btn: [],
    list: [
      {
        title: "우리동네질문",
        description: "궁금한 게 있을 땐 이웃에게 물어보세요.",
        imgSrc: icon,
      },
      {
        title: "동네분실센터",
        description: "무언가를 잃어버렸을 때, 함께 찾을 수 있어요.",
        imgSrc: icon,
      },
      {
        title: "동네모임",
        description: "관심사가 비슷한 이웃과 온오프라인으로 만나요.",
        imgSrc: icon,
      },
    ],
  },
  {
    bgColor: "white",
    direction: "row-reverse",
    title: "내 근처에서 찾는 동네가게",
    description:
      "우리 동네 가게를 찾고 있나요? 동네 주민이 남긴 진짜 후기를 함께 확인해보세요!",
    imgSrc: main4,
    btn: [{ title: "당근마켓 동네가게 찾기", url: "/neighborMarket" }],
    list: [],
  },
];

export const tradePostData = [
  {
    id: 1,
    imgSrc:
      "https://dnvefa72aowie.cloudfront.net/origin/article/202111/E0C758C53F97FA176C36A3629035CD51F514054EAE9CC054ACA5E2FD6C5E43D9.jpg?q=82&s=300x300&t=crop",
    title: "가히 멀티밤 새제품",
    price: 12000,
    location: "서울 성북구 장위동",
    interest: 18,
  },
  {
    id: 2,
    imgSrc:
      "https://dnvefa72aowie.cloudfront.net/origin/article/202111/FA4B9CC7F962D325967E91B150A77579FA588A5A41491A92836E79527F8231BA.jpg?q=82&s=300x300&t=crop",
    title: "lg룸앤티비 팝니다",
    price: 200000,
    location: "경기도 평택시 고덕면",
    interest: 7,
  },
  {
    id: 3,
    imgSrc:
      "https://dnvefa72aowie.cloudfront.net/origin/article/202111/805348487711971BBB6489B8A0A3B7306E5A4E0798930AF2587545B533C0DA72.jpg?q=82&s=300x300&t=crop",
    title: "오단 플라스틱 서랍장 팔아용",
    price: 10000,
    location: "충북 청주시 흥덕구 봉명동",
    interest: 9,
  },
  {
    id: 4,
    imgSrc:
      "https://dnvefa72aowie.cloudfront.net/origin/article/202111/F27DC1068390BE4B11D1DCAA60A80C41D46C5827F9C4C9C2E8A7A7FE66EECCE5.jpg?q=82&s=300x300&t=crop",
    title: "선반 팔아요",
    price: 3000,
    location: "대전 중구 선화동",
    interest: 16,
  },
  {
    id: 5,
    imgSrc:
      "https://dnvefa72aowie.cloudfront.net/origin/article/202111/0D42A9E42599B17B80A19A701AE5C821CB9BDE9F3144441CC4E9B6817E0B8A2D.jpg?q=82&s=300x300&t=crop",
    title: "엘지 냉장고",
    price: 120000,
    location: "인천 부평구 산곡4동",
    interest: 12,
  },
  {
    id: 6,
    imgSrc:
      "https://dnvefa72aowie.cloudfront.net/origin/article/202111/6cd0065376a9cc301ac50b73d6b9b5a2d4130199644c6afcc87f05cb1977a4be.webp?q=82&s=300x300&t=crop",
    title: "냉장고",
    price: 80000,
    location: "충북 충주시 용산동",
    interest: 4,
  },
  {
    id: 7,
    imgSrc:
      "https://dnvefa72aowie.cloudfront.net/origin/article/202111/3dd86f296983905960301c171ffd5ff8c4c3e2fd31a80322431e6cefd88aa4af.webp?q=82&s=300x300&t=crop",
    title: "티비 판매해요",
    price: 30000,
    location: "경남 창원시 마산회원구 구암동",
    interest: 6,
  },
  {
    id: 8,
    imgSrc:
      "https://dnvefa72aowie.cloudfront.net/origin/article/202111/8ED2FF937365B586E5100DAB9C3F3E4404AB2C6E84FCA4FC1739789F29D5F916.jpg?q=82&s=300x300&t=crop",
    title: "LG 통돌이 세탁기 14kg 입니다.",
    price: 100000,
    location: "광주 북구 연제동",
    interest: 6,
  },
];
