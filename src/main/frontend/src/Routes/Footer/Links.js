import logo from "images/logo.svg";
import { linkInfo } from "./FooterData";
import { FlexBox, Text, LazyImage } from "Components/Universal";
import theme from "styles/theme";

const Links = () => (
  <FlexBox>
    <LazyImage src={logo} widht="170px" height="100%" />
    <FlexBox spaceBetween width="100%" marginLeft="85px" marginTop="20px">
      {linkInfo.map((link, index) => (
        <FlexBox key={new Date().getTime() + index} column gap="20px">
          {link.map((text) => (
            <Text
              key={text}
              to="/"
              fontWeight={600}
              color={theme.colors.lightGrey}
              whiteSpace="pre-wrap"
            >
              {text}
            </Text>
          ))}
        </FlexBox>
      ))}
    </FlexBox>
  </FlexBox>
);
export default Links;
