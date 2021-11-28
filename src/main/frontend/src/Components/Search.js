import styled from "styled-components";
import search_icon from "images/search_icon.svg";
import { Link, useNavigate } from "react-router-dom";

const SearchContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 393px;
  height: 40px;
  margin-left: 32px;

  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  &:focus-within {
    outline: 1px solid rgba(0, 0, 0, 5);
  }
`;
const TextInput = styled.input`
  padding: 10px 15px 0px 15px;
  font-size: 16px;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
`;
const SearchLink = styled(Link)``;
const Icon = styled.img`
  margin-right: 15px;
  width: 19px;
  height: 19px;
`;
const Search = () => {
  const navigate = useNavigate();
  const onKeyPress = (e) => {
    if (e.key === "Enter") navigate("/search");
    //alert("검색");
  };
  return (
    <SearchContainer>
      <TextInput
        placeholder="동네 이름, 물품명 등을 검색해보세요!"
        onKeyPress={onKeyPress}
      />
      <SearchLink to="/">
        <Icon src={search_icon} alt="검색" />
      </SearchLink>
    </SearchContainer>
  );
};
export default Search;
