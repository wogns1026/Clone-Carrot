import { Box, Button, FlexBox, LazyImage, Text } from "Components/Universal";
import theme from "Style/theme";

const Title = ({ title }) => {
  return (
    <Text
      fontSize="50px"
      fontWeight={600}
      lineHeight="70px"
      whiteSpace="pre-wrap"
    >
      {title}
    </Text>
  );
};
const Description = ({ description }) => {
  return (
    <Text fontSize="16px" lineHeight="25px" whiteSpace="pre-wrap">
      {description}
    </Text>
  );
};
const ButtonList = ({ btn }) => {
  return (
    <FlexBox spaceBetween gap="10px">
      {btn?.map(({ title, url }, index) => (
        <Button
          key={index}
          height="55px"
          borderRadius="10px"
          bgColor={theme.colors.grey}
          onClick={() => console.log(url)}
        >
          <Text fontSize="18px" fontWeight="700">
            {title}
          </Text>
        </Button>
      ))}
    </FlexBox>
  );
};
const Lists = ({ list }) => {
  return (
    <FlexBox spaceBetween>
      {list?.map(({ title, description, imgSrc }, index) => (
        <Box key={index}>
          <Box size="50px" borderRadius="50%" bgColor={theme.colors.lightGreen}>
            <LazyImage src={imgSrc} size="50px" round />
          </Box>
          <Box>
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
  );
};

const Content = ({ title, description, btn, list }) => {
  return (
    <FlexBox fullSize flexJustify="center" column gap="30px">
      <Title title={title} />
      <Description description={description} />
      <ButtonList btn={btn} />
      <Lists list={list} />
    </FlexBox>
  );
};
export default Content;
