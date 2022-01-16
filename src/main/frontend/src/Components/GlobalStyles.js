import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyles = createGlobalStyle`
  ${reset};
  a{
    text-decoration:none;
    color:inherit;
  }
  *{
    box-sizing : border-box;
  }
  body{
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    padding-top:105px; // develop mode 
    /* padding-top:70px; */
  }
`;
export default GlobalStyles;
