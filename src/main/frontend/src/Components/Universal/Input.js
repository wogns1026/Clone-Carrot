import styled from "styled-components";

const TextInput = styled.input`
  font-size: 16px;
  width: 100%;
  border: none;
  outline: none;
  &::placeholder {
    opacity: 0.5;
  }
`;

export const Input = ({ onKeyPress, onChange, placeholder }) => {
  return (
    <TextInput
      placeholder={placeholder}
      onKeyPress={onKeyPress}
      onChange={onChange}
    />
  );
};

export default Input;
