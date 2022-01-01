import theme from "Style/theme";
import styled from "styled-components";

const STYLE = theme.input;

const TextInput = styled.input`
  border: none;
  outline: none;
  &::placeholder {
    opacity: 0.5;
  }
  &:focus::placeholder {
    color: transparent;
  }

  ${(props) => {
    const styles = [];
    Object.keys(props).forEach((key) => {
      if (STYLE[key]) {
        if (typeof STYLE[key] === "function") {
          styles.push(STYLE[key](props[key]));
        } else {
          styles.push(`${STYLE[key]}`);
        }
      }
    });
    return styles.join("\n");
  }}
`;

export const Input = ({ onKeyPress, onChange, placeholder, ...rest }) => {
  return (
    <TextInput
      placeholder={placeholder}
      onKeyPress={onKeyPress}
      onChange={onChange}
      {...rest}
    />
  );
};

export default Input;
