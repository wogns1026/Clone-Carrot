import React, { useState } from "react";
import {
  Button,
  ContentContainer,
  FlexBox,
  HorizontalDivider,
  Text,
  TextArea,
} from "Components/Universal";
import theme from "styles/theme";
import ImageUploader from "./ImageUpload/ImageUploader";
import useImageUpload from "hooks/useImageUpload";
import { useLocation } from "react-router-dom";
import { useRegistBoard } from "Routes/Board/hooks/useRegistBoard";

const BoardRegist = () => {
  const { state } = useLocation();
  const { regist } = useRegistBoard();
  const [content, setContent] = useState(state?.content);
  const [imgFile, imgBase64, upload, remove] = useImageUpload(state?.image);

  const data = {
    boardId: state?.boardId ? state?.boardId : null,
    userId: 2, // Redux에서 가져오도록 변경 필요
    // image: "Image", // 이미지 배열을 넘겨주도록 변경 필요
    ...state,
    content: content,
    regTime: new Date(),
  };

  const handleRegist = () => regist(data, imgFile);
  const handleImageUpload = (e) => upload(e.target.files);
  return (
    <ContentContainer column width={theme.size.window.board}>
      <FlexBox fullSize column gap="20px">
        <FlexBox fullSize spaceBetween marginTop="20px">
          <Text fontSize="40px">동네정보 글쓰기</Text>
          <Button
            width="100px"
            borderRadius="20px"
            bgColor={theme.colors.carrot}
            fontSize="15px"
            fontWeight={700}
            onClick={handleRegist}
          >
            완료
          </Button>
        </FlexBox>
        <HorizontalDivider />
        <ImageUploader
          imgFile={imgFile}
          imgBase64={imgBase64}
          upload={handleImageUpload}
          remove={remove}
          size="100px"
        />
        <HorizontalDivider />
        <TextArea
          height="500px"
          fontSize="20px"
          onChange={setContent}
          placeholder="근처의 이웃에게 질문하거나 이야기를 해보세요"
          value={content}
        />
        <HorizontalDivider />
      </FlexBox>
    </ContentContainer>
  );
};
export default BoardRegist;
