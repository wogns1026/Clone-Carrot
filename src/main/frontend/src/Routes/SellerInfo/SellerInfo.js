import { useState } from "react";
import Loader from "Components/Loading/Loader";
import SellerProfile from "./Profile/SellerProfile";
import SellerManner from "./Manner/SellerManner";
import SellerReview from "./Review/SellerReview";
import SellerArticleList from "./Article/SellerArticleList";
import { ContentContainer, MenuButtonList } from "Components/Universal";
import theme from "styles/theme";
import { useFetchSellerInfo } from "Components/Profile/hooks/useFetchSellerInfo";

const SellerInfo = () => {
  const [menu, setMenu] = useState("trade");
  const { loading, sellItem, sellerInfo, buyReviews } = useFetchSellerInfo();

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
        <SellerReview buyReviews={buyReviews} />
      ) : menu === "manner" ? (
        <SellerManner />
      ) : (
        <SellerArticleList sellItem={sellItem} />
      )}
    </ContentContainer>
  );
};

export default SellerInfo;
