import React, { useState } from "react";
import {
  Button,
  ContentContainer,
  FlexBox,
  HorizontalDivider,
  Text,
  TextArea,
} from "Components/Universal";
import theme from "Style/theme";
import ImageUploader from "./ImageUpload/ImageUploader";
import useImageUpload from "Hooks/useImageUpload";
import { boardApi } from "api";
import { useLocation, useNavigate } from "react-router-dom";

const BoardRegist = () => {
  const { state } = useLocation();
  const [content, setContent] = useState(state?.content);
  const [imgFile, imgBase64, upload, remove] = useImageUpload(state?.image);
  const navigate = useNavigate();

  const regist = () => {
    boardApi
      .RegistBoard({
        boardId: state?.boardId ? state?.boardId : null,
        userId: 2, // Redux에서 가져오도록 변경 필요
        content,
        image: "Image", // 이미지 배열을 넘겨주도록 변경 필요
        regTime: new Date(),
      })
      .then((data) => {
        if (data?.data?.success === "success") navigate(`/board/${1}`);
        // 등록된 게시물로 리다이렉트
        // response 객체가 board id를 받을 수 있도록 개선 필요함
      })
      .catch((error) => console.log(error));
  };

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
            onClick={regist}
          >
            완료
          </Button>
        </FlexBox>
        <HorizontalDivider />
        <ImageUploader
          imgFile={imgFile}
          imgBase64={imgBase64}
          upload={upload}
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
