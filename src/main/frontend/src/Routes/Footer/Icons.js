import { FlexBox, Box, Text, LazyImage } from "Components/Universal";
import { icons } from "redux/data/icons";

const Icons = () => {
  const socialIcons = [icons.facebook, icons.instagram, icons.blog];
  return (
    <Box verticalMargin="15px">
      <FlexBox gap="25px" flexAlign="center">
        {socialIcons.map((icon, index) => (
          <LazyImage key={index} src={icon} size="25px" alt="icon" />
        ))}
        <Text underline="underline">한국</Text>
      </FlexBox>
    </Box>
  );
};
export default Icons;
