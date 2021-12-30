import React from "react";
import { Text, FlexBox, LazyBackgroundImage } from "Components/Universal";
import theme from "Style/theme";
const ProfileUserinfo = ({ id, src, name, address }) => {
  return (
    <FlexBox>
      <LazyBackgroundImage
        src={src}
        size="40px"
        round
        center
        border={theme.colors.lightDark}
        alt="사용자이미지"
      />
      <FlexBox column marginLeft="10px" marginTop="7px">
        <Text width="100%" fontSize="15px" fontWeight={700} marginBottom="5px">
          {name}
        </Text>
        <Text fontSize="13px">{address}</Text>
      </FlexBox>
    </FlexBox>
  );
};

export default ProfileUserinfo;
