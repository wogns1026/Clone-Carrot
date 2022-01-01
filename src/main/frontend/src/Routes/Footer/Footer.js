import ContentContainer from "Components/Content/ContentContainer";
import { contactInfo, address, coperation } from "./FooterData";
import { FlexBox, Box, Text, HorizontalDivider } from "Components/Universal";
import theme from "Style/theme";
import Links from "./Links";
import Contact from "./Contact";
import Icons from "./Icons";

const Footer = () => {
  return (
    <ContentContainer
      bgColor={`${theme.colors.deepDarkgrey}`}
      direction="column"
      height="100%"
    >
      <Box width="100%" verticalMargin="85px">
        <Links />
        <HorizontalDivider marginTop="10px" marginBottom="35px" />
        <Box fontSize="14px" color={theme.colors.darkGrey}>
          <FlexBox column>
            <Contact info={contactInfo.slice(0, contactInfo.length / 2)} />
            <Contact info={contactInfo.slice(contactInfo.length / 2)} />
            <Box verticalMargin="20px">
              <Text whiteSpace="wrap">{address}</Text>
            </Box>
            <Icons />
            <Text>{coperation}</Text>
          </FlexBox>
        </Box>
      </Box>
    </ContentContainer>
  );
};
export default Footer;
