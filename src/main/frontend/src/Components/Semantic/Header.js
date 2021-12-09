import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "images/logo.svg";
import Search from "Components/Search/Search";
import ContentContainer from "Components/Universal/ContentContainer";

const FixedHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  width: 100%;

  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;
const LogoTitle = styled.ul`
  display: flex;
  align-items: center;
`;
const LogoLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;
`;
const Header = () => {
  return (
    <FixedHeader>
      <ContentContainer
        height="71px"
        component={
          <LogoTitle>
            <LogoLink to="/">
              <img src={logo} alt="메인로고" />
            </LogoLink>
            <Search placeholder="동네 이름, 물품명 등을 검색해보세요!" />
          </LogoTitle>
        }
      ></ContentContainer>
    </FixedHeader>
  );
};
export default Header;
