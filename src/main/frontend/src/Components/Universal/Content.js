import styled from "styled-components";
import TextContent from "./TextContent";
import { SpaceBetweenFlexBox } from "Components/Universal/Flex";
import { Button } from "Components/Universal/Button";
import { FullSizeBox } from "Components/Universal/Box";
import { LazyCircleIcon } from "Components/Universal/Image";

const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
`;
const ItemImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #c2e8c2;
`;
const Title = styled.div`
  margin: 15px 0;
`;
const Content = ({ title, description, btn, list }) => {
  return (
    <Body>
      <TextContent fontSize="40px" fontWeight={600} lineHeight="70px">
        {title}
      </TextContent>
      <TextContent fontSize="16px" lineHeight="25px">
        {description}
      </TextContent>
      <SpaceBetweenFlexBox>
        {btn &&
          btn.map(({ title, url }, index) => (
            <Button
              key={index}
              width="200px"
              height="55px"
              onClick={() => console.log(url)}
            >
              <TextContent fontSize="18px" fontWeight="700">
                {title}
              </TextContent>
            </Button>
          ))}
      </SpaceBetweenFlexBox>
      <SpaceBetweenFlexBox>
        {list &&
          list.map(({ title, description, imgSrc }, index) => (
            <FullSizeBox key={index}>
              <ItemImage>
                <LazyCircleIcon src={imgSrc} />
              </ItemImage>
              <Title>
                <TextContent fontSize={"14px"} fontWeight={700}>
                  {title}
                </TextContent>
              </Title>
              <TextContent fontSize={"13px"} lineHeight={"20px"}>
                {description}
              </TextContent>
            </FullSizeBox>
          ))}
      </SpaceBetweenFlexBox>
    </Body>
  );
};
export default Content;
