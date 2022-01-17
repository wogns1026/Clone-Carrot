import React, { useState } from "react";
import {
  Button,
  ContentContainer,
  DropdownMenu,
  FlexBox,
  HorizontalDivider,
  Input,
  Text,
  TextArea,
} from "Components/Universal";
import theme from "styles/theme";
import ImageUploader from "./ImageUpload/ImageUploader";
import useImageUpload from "hooks/useImageUpload";
import { useLocation } from "react-router-dom";
import { categoryData } from "./categoryData";
import { useRegistArticle } from "Routes/Article/hooks/useRegistArticle";

const ArticleRegist = () => {
  const { state } = useLocation();
  const [itemTitle, setItemTitle] = useState(state?.itemTitle);
  const [cost, setCost] = useState(state?.cost);
  const [category, setCategory] = useState(state?.category);
  const [description, setDescription] = useState(state?.description);
  const [imgFile, imgBase64, upload, remove] = useImageUpload();
  const { regist } = useRegistArticle();

  const data = {
    userId: 1, // Redux에서 가져오도록 변경 필요
    itemTitle,
    category,
    cost,
    description,
    image: "Image", // 이미지 배열을 넘겨주도록 변경 필요
    regTime: new Date(),
  };

  const handleRegist = () => regist(data);

  return (
    <ContentContainer column width={theme.size.window.board}>
      <FlexBox fullSize column gap="20px">
        <FlexBox fullSize spaceBetween marginTop="20px">
          <Text fontSize="40px">중고거래 글쓰기</Text>
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
          upload={upload}
          remove={remove}
          size="100px"
        />
        <HorizontalDivider />
        <Input
          fontSize="20px"
          onKeyPress={setItemTitle}
          onChange={setItemTitle}
          placeholder="제목"
          value={itemTitle}
        />
        <HorizontalDivider />
        <DropdownMenu
          title={category ? category : "카테고리"}
          menuList={categoryData}
          onSelected={setCategory}
          disabled={false}
        />
        <HorizontalDivider />
        <Input
          fontSize="20px"
          onKeyPress={setCost}
          onChange={setCost}
          placeholder="&#8361; 가격 (선택사항)"
          value={cost}
        />
        <HorizontalDivider />
        <TextArea
          height="500px"
          fontSize="20px"
          onChange={setDescription}
          placeholder="높이, 길이, 넓이, 무게 등 물품에 대한 자세한 정보를 작성하면 판매확률이 올라가요!"
          flexWrap
          value={description}
        />
        <HorizontalDivider />
      </FlexBox>
    </ContentContainer>
  );
};
export default ArticleRegist;
