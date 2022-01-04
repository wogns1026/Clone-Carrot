import { FlexBox, Button, Text } from "Components/Universal";
import theme from "Style/theme";

const DevelopHeader = () => {
  const btnColor = theme.colors.carrot;

  const LinkButton = ({ link, text }) => (
    <Button height="30px" bgColor={btnColor} to={link} borderRadius="10px">
      <Text fontWeight={700}>{text}</Text>
    </Button>
  );

  return (
    <FlexBox
      center
      width="100%"
      height="40px"
      borderRadius="5px"
      border={theme.colors.lightDark}
      outline={theme.colors.dark}
      gap="10px"
    >
      <LinkButton link="/hot-articles" text="인기 매물" />
      <LinkButton link="/articles/1" text="매물 정보" />
      <LinkButton link="/search/1" text="검색 결과" />
      <LinkButton link="/board/1" text="게시물 정보" />
      <LinkButton link="/seller-info/1" text="판매자 정보" />
      <LinkButton link="/signin" text="로그인" />
      <LinkButton link="/signup" text="최초 로그인" />
    </FlexBox>
  );
};
export default DevelopHeader;
