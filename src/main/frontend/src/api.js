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
