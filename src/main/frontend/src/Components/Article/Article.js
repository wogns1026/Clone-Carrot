import React from "react";
import defaultImg from "images/logo.svg";
import {
  Box,
  FlexBox,
  LazyBackgroundImage,
  LinkTo,
} from "Components/Universal";
import theme from "Style/theme";
import ArticleInfo from "./ArticleInfo";
import { userApi } from "api";
import Loader from "Components/Loading/Loader";
import Message from "Components/Loading/Message";

const Article = ({
  itemId,
  sellerId,
  image = defaultImg,
  itemTitle,
  cost = 0,
  viewCnt = 0,
  height = "210px",
}) => {
  let { loading, data, error } = userApi.GetUser(sellerId);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message text={error} />
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
          address={data.sellerInfo.address}
          viewCnt={`관심 ${viewCnt}`}
        />
      </FlexBox>
    </LinkTo>
  );
};

export default Article;
