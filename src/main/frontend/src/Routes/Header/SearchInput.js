import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FlexBox, Input, ImageButton } from "Components/Universal";
import search_icon from "images/search_icon.svg";
import theme from "styles/theme";

const SearchInput = ({ placeholder }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const search = () => {
    navigate(`/search/${input}`);
  };
  return (
    <FlexBox
      center
      width="100%"
      height="40px"
      maxWidth="393px"
      marginLeft="32px"
      borderRadius="5px"
      border={theme.colors.lightDark}
      outline={theme.colors.dark}
      horizontalPadding="16px"
    >
      <Input
        fullSize
        placeholder={placeholder}
        onKeyPress={search}
        onChange={setInput}
        fontSize="16px"
      />
      <ImageButton src={search_icon} onClick={search} />
    </FlexBox>
  );
};
export default SearchInput;
