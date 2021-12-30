import React, { useEffect, useState } from "react";
import { FlexBox, Text, LazyImage, LinkTo } from "Components/Universal";
import Message from "Components/Loading/Message";
import Loader from "Components/Loading/Loader";
import theme from "Style/theme";
import { UserAPI } from "api";

const BoardPreview = ({ boardId, userId, image, content }) => {
  const [address, setAddress] = useState();
  const { loading, data, error } = UserAPI(userId);

  useEffect(() => {
    if (data) setAddress(data.address);
  }, [data]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message text={error} />
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
            {address}
          </Text>
        </FlexBox>
      </FlexBox>
    </LinkTo>
  );
};
export default BoardPreview;
