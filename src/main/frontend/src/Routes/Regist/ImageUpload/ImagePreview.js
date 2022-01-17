import React from "react";
import { Button, FlexBox, LazyImage, Text } from "Components/Universal";
import theme from "styles/theme";

const ImagePreview = ({ src, remove }) => {
  return (
    <FlexBox center relative size="100px" border={theme.colors.darkGrey}>
      <LazyImage fullSize src={src.preview} />
      <Button
        absoluteTop
        bgColor={theme.colors.deepDarkgrey}
        size="20px"
        right={0}
        borderRadius="50%"
        onClick={() => remove(src)}
      >
        <Text color={theme.colors.white}>x</Text>
      </Button>
    </FlexBox>
  );
};
export default ImagePreview;
