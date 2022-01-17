import { FlexBox, Text, Box, Button } from "Components/Universal";
import theme from "styles/theme";

const MenuButtonList = ({ currentKey, keyList, onSelected, ...rest }) => {
  //* keyList = [{ key: "trade", text: "판매 물품" }, ...]
  return (
    <FlexBox flexAlign="center" width="100%">
      {keyList.map(({ key, text }) =>
        currentKey === key ? (
          <Box key={key} underlineEffect>
            <Button
              width="100px"
              onClick={() => onSelected(key)}
              verticalMargin="8px"
              horizontalMargin="20px"
            >
              <Text
                fontSize="17px"
                fontWeight={700}
                color={theme.colors.carrot}
              >
                {text}
              </Text>
            </Button>
          </Box>
        ) : (
          <Box key={key} marginBottom="3px">
            <Button
              width="100px"
              onClick={() => onSelected(key)}
              verticalMargin="8px"
              horizontalMargin="20px"
            >
              <Text fontSize="17px">{text}</Text>
            </Button>
          </Box>
        )
      )}
    </FlexBox>
  );
};

export default MenuButtonList;
