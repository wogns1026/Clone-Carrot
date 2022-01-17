import React from "react";
import defaultImg from "images/logo.svg";
import {
  Box,
  FlexBox,
  LazyBackgroundImage,
  LinkTo,
} from "Components/Universal";
import theme from "styles/theme";
import Loader from "Components/Loading/Loader";
import ArticleInfo from "./ArticleInfo";
import { useFetchSellerInfoById } from "Components/Profile/hooks/useFetchSellerInfoById";

const Article = ({
  itemId,
  sellerId,
  image = defaultImg,
  itemTitle,
  cost = 0,
  viewCnt = 0,
  height = "210px",
}) => {
  let { loading, sellerInfo } = useFetchSellerInfoById(sellerId);

  return loading ? (
    <Loader />
  ) : (
    <LinkTo to={`/articles/${itemId}`}>
      <FlexBox column interactive>
        <Box height={height} marginBottom="17px">
          <LazyBackgroundImage
            borderRadius="10px"
            src={defaultImg}
            center
            border={theme.colors.lightDark}
          />
        </Box>
        <ArticleInfo
          itemTitle={itemTitle}
          cost={`${cost.toLocaleString()}원`}
          address={sellerInfo.address}
          viewCnt={`관심 ${viewCnt}`}
        />
      </FlexBox>
    </LinkTo>
  );
};

export default Article;
