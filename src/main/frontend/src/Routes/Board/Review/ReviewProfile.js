import React from "react";
import {
  FlexBox,
  LazyBackgroundImage,
  LinkTo,
  Text,
} from "Components/Universal";
import theme from "Style/theme";

const ReviewProfile = ({ id, src, name, address }) => {
  return (
    <LinkTo to={`/seller-info/${id}`}>
      <FlexBox flexAlign="center" gap="10px" marginBottom="10px">
        <LazyBackgroundImage
          src={src}
          size="24px"
          round
          center
          border={theme.colors.lightDark}
          alt=""
        />
        <Text fontSize="15px" fontWeight={700}>
          {name}
        </Text>
        <Text fontSize="13px">{address}</Text>
      </FlexBox>
    </LinkTo>
  );
};

export default ReviewProfile;
