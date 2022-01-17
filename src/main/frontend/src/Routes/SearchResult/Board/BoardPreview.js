import React from "react";
import { FlexBox, Text, LazyImage, LinkTo } from "Components/Universal";
import Loader from "Components/Loading/Loader";
import theme from "styles/theme";
import { useFetchSellerInfoById } from "Components/Profile/hooks/useFetchSellerInfoById";

const BoardPreview = ({ boardId, userId, image, content }) => {
  const { loading, sellerInfo } = useFetchSellerInfoById(userId);

  return loading ? (
    <Loader />
  ) : (
    <LinkTo to={`/board/${boardId}`}>
      <FlexBox fullSize marginBottom="25px" interactive>
        {image && <LazyImage src={image} size="120px" />}
        <FlexBox column>
          <Text fontSize="14px">{content}</Text>
          <Text
            fontSize="14px"
            lineHeight="18px"
            marginTop="6px"
            color={theme.colors.darkGrey}
          >
            {sellerInfo.address}
          </Text>
        </FlexBox>
      </FlexBox>
    </LinkTo>
  );
};
export default BoardPreview;
