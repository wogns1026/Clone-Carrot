import styled from "styled-components";
import LinkContent from "./LinkContent";

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const LinkContentList = ({ content, underline }) => {
  return (
    <Container>
      {content.map((con, index) => (
        <LinkContent key={index} content={con} underline={underline} />
      ))}
    </Container>
  );
};
export default LinkContentList;
