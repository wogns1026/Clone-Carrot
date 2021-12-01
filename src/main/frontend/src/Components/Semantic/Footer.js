import styled from "styled-components";
import ContentContainer from "./Univeral/ContentContainer";

const Container = styled.footer`
  height: 550px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const Footer = () => {
  return (
    <Container>
      <ContentContainer
        bgColor="#495057"
        direction="column"
        height="550"
        component={<></>}
      ></ContentContainer>
    </Container>
  );
};
export default Footer;
