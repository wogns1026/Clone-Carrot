import React from "react";
import { Text, FlexBox, ProgressBar } from "Components/Universal";
import theme from "styles/theme";
import MannerFace from "./MannerFace";

const MannerTemper = ({ id, mannerTemper }) => {
  const color = theme.colors.green;
  const textColor = theme.colors.deepDarkgrey;
  return (
    <FlexBox height="100%" marginTop="19px">
      <FlexBox column flexJustify="center" flexAlign="flex-end">
        <FlexBox>
          <FlexBox
            column
            flexJustify="center"
            flexAlign="flex-end"
            marginTop="5px"
            marginRight="11px"
            marginBottom="9px"
          >
            <Text
              fontSize="15px"
              fontWeight={700}
              marginBottom="7px"
              color={color}
            >{`${mannerTemper} °C`}</Text>
            <ProgressBar
              height="4px"
              percent={mannerTemper}
              progressColor={color}
            />
          </FlexBox>
          <MannerFace id={id} mannerTemper={mannerTemper} />
        </FlexBox>
        <Text fontSize="11.5px" color={textColor}>
          매너온도
        </Text>
      </FlexBox>
    </FlexBox>
  );
};

export default MannerTemper;
