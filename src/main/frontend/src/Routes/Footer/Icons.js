import { FlexBox, Box, Text, LazyImage } from "Components/Universal";
import { icons } from "api";
const Icons = () => (
  <Box verticalMargin="15px">
    <FlexBox gap="25px" flexAlign="center">
      {[icons.facebook, icons.instagram, icons.blog].map((icon, index) => (
        <LazyImage key={index} src={icon} size="25px" alt="icon" />
      ))}
      <Text underline="underline">한국</Text>
    </FlexBox>
  </Box>
);
export default Icons;
