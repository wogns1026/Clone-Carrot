import styled from "styled-components";
import logo from "images/logo.svg";
import Search from "Components/Search/Search";
import { ImageButton } from "Components/Universal/Button";
import {
  FlexBox,
  Box,
  ContentContainer,
  HorizontalDivider,
} from "Components/Universal";

const Logo = styled.div`
  padding-bottom: 5px;
`;
const Header = () => {
  return (
    <Box width="100%" height="auto" fixed>
      <ContentContainer height="71px">
        <FlexBox fullSize flexAlign="center">
          <Logo>
            <ImageButton to="/" src={logo} width="120px"></ImageButton>
          </Logo>
          <Search placeholder="동네 이름, 물품명 등을 검색해보세요!" />
        </FlexBox>
      </ContentContainer>
      <HorizontalDivider />
    </Box>
  );
};
export default Header;
