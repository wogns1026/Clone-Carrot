import React, { useEffect, useState } from "react";
import {
  FlexBox,
  LazyBackgroundImage,
  LinkTo,
  Text,
} from "Components/Universal";
import theme from "Style/theme";
import Loader from "Components/Loading/Loader";
import Message from "Components/Loading/Message";
import { userApi } from "api";

const ReviewProfile = ({ userId, src }) => {
  let { loading, data, error } = userApi.GetUser(userId);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message text={error} />
  ) : (
    <LinkTo to={`/seller-info/${userId}`}>
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
          {data.sellerInfo.userName}
        </Text>
        <Text fontSize="13px">{data.sellerInfo.address}</Text>
      </FlexBox>
    </LinkTo>
  );
};

export default ReviewProfile;
