import { useParams } from "react-router-dom";
import Loader from "Components/Loading/Loader";
import Message from "Components/Loading/Message";
import SellerProfile from "./SellerProfile";
import SellerManner from "./SellerManner";
import SellerReview from "./SellerReview";
import SellerArticleList from "./SellerArticleList";
import { useState } from "react";
import { userApi } from "api";
import theme from "Style/theme";
import { ContentContainer, MenuButtonList } from "Components/Universal";

const SellerInfo = () => {
  const { id } = useParams();
  const [menu, setMenu] = useState("trade");
  let { loading, data, error } = userApi.GetUser(id);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message text={error} />
  ) : (
    <ContentContainer column width={theme.size.window.sellerInfo}>
      {data.sellerInfo && <SellerProfile data={data.sellerInfo} />}
      <MenuButtonList
        currentKey={menu}
        keyList={[
          { key: "trade", text: "판매 물품" },
          { key: "review", text: "거래 후기" },
          { key: "manner", text: "매너 칭찬" },
        ]}
        onSelected={setMenu}
      />
      {menu === "review" ? (
        data.buyReviews && <SellerReview dataArr={data.buyReviews} />
      ) : menu === "manner" ? (
        <SellerManner />
      ) : (
        data.sellItem && <SellerArticleList dataArr={data.sellItem} />
      )}
    </ContentContainer>
  );
};

export default SellerInfo;
