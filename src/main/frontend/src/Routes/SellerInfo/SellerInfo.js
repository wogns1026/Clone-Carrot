import { useState } from "react";
import Loader from "Components/Loading/Loader";
import SellerProfile from "./Profile/SellerProfile";
import SellerManner from "./Manner/SellerManner";
import SellerReview from "./Review/SellerReview";
import SellerArticleList from "./Article/SellerArticleList";
import { ContentContainer, MenuButtonList } from "Components/Universal";
import { useFetchSellerInfoOfReview } from "./hooks/useFetchSellerInfoOfReview";
import theme from "styles/theme";

const SellerInfo = () => {
  const [menu, setMenu] = useState("trade");
  const { loading, sellItem, sellerInfo, buyReviewsWithSellerInfo } =
    useFetchSellerInfoOfReview();

  const keyList = [
    { key: "trade", text: "판매 물품" },
    { key: "review", text: "거래 후기" },
    { key: "manner", text: "매너 칭찬" },
  ];
  return loading ? (
    <Loader />
  ) : (
    <ContentContainer column width={theme.size.window.sellerInfo}>
      <SellerProfile sellerInfo={sellerInfo} />
      <MenuButtonList
        currentKey={menu}
        keyList={keyList}
        onSelected={setMenu}
      />
      {menu === "review" ? (
        <SellerReview buyReviews={buyReviewsWithSellerInfo} />
      ) : menu === "manner" ? (
        <SellerManner />
      ) : (
        <SellerArticleList sellItem={sellItem} />
      )}
    </ContentContainer>
  );
};

export default SellerInfo;
