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
import theme from "Style/theme";
import ImageUploader from "./ImageUpload/ImageUploader";
import useImageUpload from "Hooks/useImageUpload";
import { useNavigate } from "react-router-dom";
import { articleApi } from "api";
import { categoryData } from "./categoryData";

const ArticleRegist = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imgFile, imgBase64, upload, remove] = useImageUpload();
  const navigate = useNavigate();

  const regist = () => {
    articleApi
      .RegistArticle({
        userId: 1, // Redux에서 가져오도록 변경 필요
        itemTitle: title,
        category,
        price,
        description,
        image: "Image", // 이미지 배열을 넘겨주도록 변경 필요
        regTime: new Date(),
      })
      .then((data) => {
        if (data?.data?.success === "success") navigate(`/article/${1}`);
        // 등록된 게시물로 리다이렉트
        // response 객체가 board id를 받을 수 있도록 개선 필요함
      })
      .catch((error) => console.log(error));
  };

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
        />
        <HorizontalDivider />
        <Input
          fontSize="20px"
          onKeyPress={setTitle}
          onChange={setTitle}
          placeholder="제목"
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
          onKeyPress={setPrice}
          onChange={setPrice}
          placeholder="&#8361; 가격 (선택사항)"
        />
        <HorizontalDivider />
        <TextArea
          height="500px"
          fontSize="20px"
          onKeyPress={setDescription}
          onChange={setDescription}
          placeholder="높이, 길이, 넓이, 무게 등 물품에 대한 자세한 정보를 작성하면 판매확률이 올라가요!"
          flexWrap
        />
        <HorizontalDivider />
      </FlexBox>
    </ContentContainer>
  );
};
export default ArticleRegist;
