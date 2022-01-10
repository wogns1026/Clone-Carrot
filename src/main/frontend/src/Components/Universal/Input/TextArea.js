import theme from "Style/theme";
import styled from "styled-components";

const STYLE = theme.input;

const TextInput = styled.textarea`
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

export const TextArea = ({ onKeyPress, onChange, placeholder, ...rest }) => {
  return (
    <TextInput
      placeholder={placeholder}
      onKeyPress={(e) =>
        e.key === "Enter" &&
        e.target.value &&
        onKeyPress &&
        onKeyPress(e.target.value)
      }
      onChange={(e) => e.target.value && onChange(e.target.value)}
      {...rest}
    />
  );
};

export default TextArea;