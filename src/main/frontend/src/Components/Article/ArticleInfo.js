import React from "react";
import { Text } from "Components/Universal";
const ArticleInfo = ({ itemTitle, cost = 0, location, viewCnt = 0 }) => {
  return (
    <>
      <Text fontSize="16px" verticalMargin="10px" notOverflow>
        {itemTitle}
      </Text>
      <Text fontSize="15px" fontWeight="700">
        {cost}
      </Text>
      <Text fontSize="13px" verticalMargin="10px">
        {location}
      </Text>
      <Text fontSize="12.5px" marginBottom="10px" opacity={0.6}>
        {viewCnt}
      </Text>
    </>
  );
};

export default ArticleInfo;
