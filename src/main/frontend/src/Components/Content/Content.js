import { Box, Button, FlexBox, LazyImage, Text } from "Components/Universal";
import theme from "Style/theme";

const Content = ({ title, description, btn, list }) => {
  return (
    <FlexBox flexJustify="center" column gap="30px">
      <Text
        fontSize="40px"
        fontWeight={600}
        lineHeight="70px"
        whiteSpace="pre-wrap"
      >
        {title}
      </Text>
      <Text fontSize="16px" lineHeight="25px" whiteSpace="pre-wrap">
        {description}
      </Text>
      <FlexBox spaceBetween>
        {btn &&
          btn.map(({ title, url }, index) => (
            <Button
              key={index}
              width="200px"
              height="55px"
              onClick={() => console.log(url)}
            >
              <Text fontSize="18px" fontWeight="700">
                {title}
              </Text>
            </Button>
          ))}
      </FlexBox>
      <FlexBox spaceBetween>
        {list &&
          list.map(({ title, description, imgSrc }, index) => (
            <Box key={index}>
              <Box
                width="50px"
                height="50px"
                radius="50px"
                bgColor={theme.colors.lightGreen}
              >
                <LazyImage src={imgSrc} size="50px" round />
              </Box>
              <Box verticalMargin="15px">
                <Text fontSize="14px" fontWeight={700} whiteSpace="pre-wrap">
                  {title}
                </Text>
              </Box>
              <Text fontSize="13px" lineHeight="20px" whiteSpace="pre-wrap">
                {description}
              </Text>
            </Box>
          ))}
      </FlexBox>
    </FlexBox>
  );
};
export default Content;
