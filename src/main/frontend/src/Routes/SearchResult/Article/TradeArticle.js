import React from "react";
import {
  Box,
  FlexBox,
  LazyBackgroundImage,
  LinkTo,
} from "Components/Universal";
import ArticleInfo from "./ArticleInfo";
import defaultImg from "images/logo.svg";
import theme from "Style/theme";

const TradeArticle = ({
  id,
  itemId,
  image = defaultImg,
  itemTitle,
  cost = 0,
  location,
  viewCnt = 0,
}) => {
  return (
    <LinkTo to={`/articles/${itemId}`}>
      <FlexBox column interactive>
        <Box height="160px">
          <LazyBackgroundImage
            borderRadius="10px"
            src={image}
            center
            border={theme.colors.lightDark}
          />
        </Box>
        <ArticleInfo
          itemTitle={itemTitle}
          cost={`${cost.toLocaleString()}원`}
          location={location}
          viewCnt={viewCnt}
        />
      </FlexBox>
    </LinkTo>
  );
};

export default TradeArticle;
