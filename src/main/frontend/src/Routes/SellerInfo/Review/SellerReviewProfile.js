import React from "react";
import {
  FlexBox,
  LazyBackgroundImage,
  LinkTo,
  Text,
} from "Components/Universal";
import theme from "styles/theme";

const SellerReviewProfile = ({ userId, image, userName, address }) => {
  return (
    <FlexBox flexAlign="center" gap="10px" marginBottom="10px">
      <LinkTo to={`/seller-info/${userId}`}>
        <LazyBackgroundImage
          src={image}
          size="24px"
          round
          center
          border={theme.colors.lightDark}
        />
      </LinkTo>
      <Text to={`/seller-info/${userId}`} fontSize="15px" fontWeight={700}>
        {userName}
      </Text>
      <Text fontSize="13px">{address}</Text>
    </FlexBox>
  );
};
export default SellerReviewProfile;
