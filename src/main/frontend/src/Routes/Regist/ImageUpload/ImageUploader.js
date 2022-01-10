import React from "react";
import { Button, FlexBox, Text } from "Components/Universal";
import theme from "Style/theme";
import ImagePreview from "./ImagePreview";

const ImageUploader = ({ imgUrl, imgBase64, upload, remove }) => {
  return (
    <FlexBox gap="20px">
      <input
        type="file"
        id="upload"
        multiple="multiple"
        onChange={upload}
        style={{ display: "none" }}
      />
      <Button
        as="label"
        htmlFor="upload"
        size="100px"
        border={theme.colors.darkGrey}
        bgColor={theme.colors.grey}
      >
        <FlexBox fullSize center>
          <Text>사진 등록</Text>
        </FlexBox>
      </Button>

      <FlexBox fullSize>
        {imgBase64?.map((img) => (
          <ImagePreview src={img} remove={remove} />
        ))}
      </FlexBox>
    </FlexBox>
  );
};
export default ImageUploader;
