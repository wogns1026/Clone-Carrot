import { FlexBox } from "Components/Universal";
import theme from "styles/theme";

const ContentContainer = ({
  height = "100%",
  minHeight,
  bgColor = theme.colors.white,
  children,
  ...rest
}) => {
  return (
    <FlexBox
      center
      width="100%"
      height={height}
      minHeight={minHeight}
      bgColor={bgColor}
    >
      <FlexBox center height="100%" {...rest}>
        {children}
      </FlexBox>
    </FlexBox>
  );
};
export default ContentContainer;
