import styled from "styled-components";
import TextContent from "./TextContent";
import { Button } from "Components/Universal/Button";
import { LazyCircleIcon } from "Components/Universal/Image";
import { FlexBox, Box } from "Components/Universal";

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
      <FlexBox spaceBetween>
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
      </FlexBox>
      <FlexBox spaceBetween>
        {list &&
          list.map(({ title, description, imgSrc }, index) => (
            <Box key={index}>
              <ItemImage>
                <LazyCircleIcon src={imgSrc} />
              </ItemImage>
              <Title>
                <TextContent fontSize="14px" fontWeight={700}>
                  {title}
                </TextContent>
              </Title>
              <TextContent fontSize="13px" lineHeight="20px">
                {description}
              </TextContent>
            </Box>
          ))}
      </FlexBox>
    </Body>
  );
};
export default Content;
