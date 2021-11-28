import ContentContainer from "Components/Univeral/ContentContainer";
import styled from "styled-components";
import Content from "Components/Univeral/Content.js";
import ImageContent from "Components/Univeral/ImageContent.js";
import { data } from "api";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <Body>
      {data &&
        data.map(
          (
            { bgColor, direction, title, description, imgSrc, btn, list },
            index
          ) => (
            <ContentContainer
              key={index}
              bgColor={bgColor}
              direction={direction}
              component={
                <>
                  <Content
                    title={title}
                    description={description}
                    btn={btn}
                    list={list}
                  />
                  <ImageContent imgSrc={imgSrc} />
                </>
              }
            ></ContentContainer>
          )
        )}
    </Body>
  );
};
export default Home;
