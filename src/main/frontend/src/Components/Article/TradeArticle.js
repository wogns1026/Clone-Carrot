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

const TradeArticle = ({
  itemId,
  image = defaultImg,
  itemTitle,
  cost = 0,
  location,
  viewCnt = 0,
  height = "210px",
}) => {
  return (
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
          location={location}
          viewCnt={`관심 ${viewCnt}`}
        />
      </FlexBox>
    </LinkTo>
  );
};

export default TradeArticle;
