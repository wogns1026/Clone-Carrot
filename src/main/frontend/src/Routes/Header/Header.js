import logo from "images/logo.svg";
import ContentContainer from "Components/Content/ContentContainer";
import {
  FlexBox,
  Box,
  HorizontalDivider,
  ImageButton,
} from "Components/Universal";
import theme from "Style/theme";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <Box width="100%" fixed bgColor={theme.colors.white}>
      <ContentContainer height="71px">
        <FlexBox fullSize flexAlign="center">
          <ImageButton to="/" src={logo} />
          <SearchInput placeholder="동네 이름, 물품명 등을 검색해보세요!" />
        </FlexBox>
      </ContentContainer>
      <HorizontalDivider />
    </Box>
  );
};
export default Header;
