import styled from "styled-components";
import logo from "images/logo.svg";
import Search from "Components/Search/Search";
import ContentContainer from "Components/Universal/ContentContainer";
import { SizeBox } from "Components/Universal/Box";
import { ImageButton } from "Components/Universal/Button";
import { LazyIcon } from "Components/Universal/Image";
import LinkTo from "Components/Universal/LinkTo";
import HorizontalDivider from "Components/Universal/HorizontalDivider";

const FixedHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;
const LogoTitle = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
`;
const Logo = styled.div`
  padding-bottom: 5px;
`;
const Header = () => {
  return (
    <SizeBox height="auto" fixed={true}>
      <ContentContainer height="71px">
        <LogoTitle>
          <Logo>
            <ImageButton to="/" src={logo} width="120px"></ImageButton>
          </Logo>
          <Search placeholder="동네 이름, 물품명 등을 검색해보세요!" />
        </LogoTitle>
      </ContentContainer>
      <HorizontalDivider />
    </SizeBox>
  );
};
export default Header;
