import { Text, FlexBox, LazyBackgroundImage } from "Components/Universal";
import carrot from "images/carrot.png";

const WelcomeTitle = () => {
  return (
    <FlexBox column center gap="10px">
      <LazyBackgroundImage size="100px" src={carrot} />
      <Text fontSize="20px" fontWeight={600}>
        당신 근처의 당근마켓
      </Text>
      <Text
        fontWeight={600}
        textCenter
        whiteSpace="pre-wrap"
      >{`내 동네를 설정하고\n당근마켓을 시작해보세요.`}</Text>
    </FlexBox>
  );
};
export default WelcomeTitle;
