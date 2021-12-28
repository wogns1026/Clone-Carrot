import React from "react";
import { FlexBox, Text, LazyImage, LinkTo } from "Components/Universal";
import theme from "Style/theme";

const BoardPreview = ({ id, src, description, location }) => {
  return (
    <LinkTo to={`/board/${id}`}>
      <FlexBox fullSize marginBottom="25px" interactive>
        {src && <LazyImage src={src} size="120px" />}
        <FlexBox column>
          <Text fontSize="14px">{description}</Text>
          <Text
            fontSize="14px"
            lineHeight="18px"
            marginTop="6px"
            color={theme.colors.darkGrey}
          >
            {location}
          </Text>
        </FlexBox>
      </FlexBox>
    </LinkTo>
  );
};
export default BoardPreview;
