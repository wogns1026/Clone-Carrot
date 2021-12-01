import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "images/logo.svg";
import Search from "Components/Search/Search";
import ContentContainer from "../Univeral/ContentContainer";

const FixedHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  width: 100%;
  height: 71px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const LogoTitle = styled.ul`
  display: flex;
  width: 1024px;
  height: 39px;
  align-items: center;
`;
const LogoLink = styled(Link)`
  height: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
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
