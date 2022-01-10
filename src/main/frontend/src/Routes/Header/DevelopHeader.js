import { FlexBox, Button, Text } from "Components/Universal";
import theme from "Style/theme";

const DevelopHeader = () => {
  const LinkButton = ({ link, text, btnColor = theme.colors.carrot }) => (
    <Button
      width="80px"
      height="30px"
      bgColor={btnColor}
      to={link}
      borderRadius="10px"
    >
      <Text fontWeight={700}>{text}</Text>
    </Button>
  );

  return (
    <FlexBox
      center
      fullSize
      borderRadius="5px"
      border={theme.colors.lightDark}
      outline={theme.colors.dark}
      gap="10px"
      flexWrap
    >
      <LinkButton link="/hot-articles" text="인기 매물" />
      <LinkButton link="/articles/1" text="매물 정보" />
      <LinkButton link="/search/우" text="검색 결과" />
      <LinkButton link="/board/1" text="게시물 정보" />
      <LinkButton link="/seller-info/1" text="판매자 정보" />
      <LinkButton
        link="/signin"
        btnColor={theme.colors.lightGreen}
        text="로그인"
      />
      <LinkButton
        link="/signup"
        btnColor={theme.colors.lightGreen}
        text="최초 로그인"
      />
      <LinkButton
        link="/regist/article"
        text="매물 등록"
        btnColor={theme.colors.blue}
      />
      <LinkButton
        link="/regist/board"
        text="게시물 등록"
        btnColor={theme.colors.blue}
      />{" "}
      <LinkButton
        link="/regist/article"
        text="매물 등록"
        btnColor={theme.colors.blue}
      />
    </FlexBox>
  );
};
export default DevelopHeader;
