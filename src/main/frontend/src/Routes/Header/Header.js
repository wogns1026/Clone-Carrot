import logo from "images/logo.svg";
import {
  FlexBox,
  Box,
  HorizontalDivider,
  ImageButton,
  ContentContainer,
} from "Components/Universal";
import theme from "styles/theme";
import SearchInput from "./SearchInput";
import DevelopHeader from "./DevelopHeader";

const Header = () => {
  return (
    <Box width="100%" fixed bgColor={theme.colors.white}>
      <ContentContainer width={theme.size.window.home} height="71px">
        <FlexBox fullSize flexAlign="center">
          <ImageButton to="/" src={logo} />
          <SearchInput placeholder="동네 이름, 물품명 등을 검색해보세요!" />
        </FlexBox>
      </ContentContainer>
      <DevelopHeader />
      <HorizontalDivider />
    </Box>
  );
};
export default Header;
