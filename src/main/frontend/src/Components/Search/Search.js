import styled from "styled-components";
import search_icon from "images/search_icon.svg";
import { useNavigate } from "react-router-dom";
import { LazyIcon } from "Components/Universal/Image";
import { Button } from "Components/Universal/Button";
import { useState } from "react";
import { Input, FlexBox } from "Components/Universal";

const SearchContainer = styled.section`
  width: 393px;
  height: 40px;
  margin-left: 32px;
  padding: 0 16px;

  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.lightDark};

  &:focus-within {
    outline: 1px solid ${(props) => props.theme.colors.Dark};
  }
`;
const Search = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const onKeyPress = (e) => {
    if (e.key === "Enter") LetSearch();
    //alert("검색");
  };
  const onChange = (e) => {
    setText(e.target.value);
  };
  const LetSearch = () => {
    navigate(`/search/${text}`);
  };
  return (
    <SearchContainer>
      <FlexBox center>
        <Input
          placeholder="동네 이름, 물품명 등을 검색해보세요!"
          onKeyPress={onKeyPress}
          onChange={onChange}
        />
        <Button color="transparent" onClick={() => LetSearch()}>
          <LazyIcon src={search_icon} size="19px" />
        </Button>
      </FlexBox>
    </SearchContainer>
  );
};
export default Search;
