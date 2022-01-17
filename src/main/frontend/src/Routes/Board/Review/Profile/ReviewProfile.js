import React from "react";
import {
  FlexBox,
  LazyBackgroundImage,
  LinkTo,
  Text,
} from "Components/Universal";
import theme from "styles/theme";
import Loader from "Components/Loading/Loader";
import { useFetchSellerInfoById } from "Components/Profile/hooks/useFetchSellerInfoById";

const ReviewProfile = ({ userId, src }) => {
  let { loading, sellerInfo } = useFetchSellerInfoById(userId);

  return loading ? (
    <Loader />
  ) : (
    <FlexBox flexAlign="center" gap="10px" marginBottom="10px">
      <LinkTo to={`/seller-info/${userId}`}>
        <LazyBackgroundImage
          src={src}
          size="24px"
          round
          center
          border={theme.colors.lightDark}
        />
      </LinkTo>
      <Text to={`/seller-info/${userId}`} fontSize="15px" fontWeight={700}>
        {sellerInfo.userName}
      </Text>
      <Text fontSize="13px">{sellerInfo.address}</Text>
    </FlexBox>
  );
};

export default ReviewProfile;
