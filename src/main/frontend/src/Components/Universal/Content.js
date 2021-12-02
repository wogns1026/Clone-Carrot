import styled from "styled-components";

const Body = styled.div`
  width: 490px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
  line-height: 70px;
`;
const Description = styled.div`
  line-height: 25px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  font-size: 18px;
  font-weight: 700;
  height: 55px;
  padding: 0 25px;
  border: none;
  border-radius: 5px;
  &:hover {
    opacity: 0.5;
  }
`;
const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ListItem = styled.div`
  font-size: 13px;
  width: 150px;
`;
const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #c2e8c2;
`;
const ItemTitle = styled.div`
  font-size: 14px;
  margin: 15px 0;
  width: 100px;
  font-weight: 700;
`;
const ItemDescription = styled.div`
  line-height: 20px;
`;
const Content = ({ title, description, btn, list }) => {
  return title ? (
    <Body>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ButtonContainer>
        {btn
          ? btn.map(({ title, url }, index) => (
              <Button key={index} onClick={() => console.log(url)}>
                {title}
              </Button>
            ))
          : ""}
      </ButtonContainer>
      <ListContainer>
        {list
          ? list.map(({ title, description, imgSrc }, index) => (
              <ListItem key={index}>
                <ItemImage src={imgSrc} alt="이미지" />
                <ItemTitle>{title}</ItemTitle>
                <ItemDescription>{description}</ItemDescription>
              </ListItem>
            ))
          : ""}
      </ListContainer>
    </Body>
  ) : (
    ""
  );
};
export default Content;
