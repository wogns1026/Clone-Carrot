import { useParams } from "react-router-dom";
import Loader from "Components/Loading/Loader";
import Message from "Components/Loading/Message";
import ContentContainer from "Components/Content/ContentContainer";
import MenuButtonList from "Components/Universal/Button/MenuButtonList";
import SellerProfile from "./SellerProfile";
import SellerManner from "./SellerManner";
import SellerReview from "./SellerReview";
import SellerTrade from "./SellerTrade";
import { useState } from "react";
import { userApi } from "api";

const SellerInfo = () => {
  const { id } = useParams();
  const [menu, setMenu] = useState("trade");
  let { loading, data, error } = userApi.GetUser(id);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message text={error} />
  ) : (
    <ContentContainer direction="column" width="677px" height="100%">
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
        data.sellItem && <SellerTrade dataArr={data.sellItem} />
      )}
    </ContentContainer>
  );
};

export default SellerInfo;
