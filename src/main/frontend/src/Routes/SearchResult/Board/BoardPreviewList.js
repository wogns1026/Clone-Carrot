import React from "react";
import { Box, HorizontalDivider, SeeMoreContainer } from "Components/Universal";
import Loader from "Components/Loading/Loader";
import BoardPreview from "./BoardPreview";
import { useSearchBoardByKeyword } from "./hooks/useSearchBoardByKeyword";

const BoardPreviewList = () => {
  const { loading, boards, morefetch } = useSearchBoardByKeyword();

  return loading ? (
    <Loader />
  ) : (
    <Box fullSize marginTop="20px" marginBottom="60px">
      <SeeMoreContainer title="동네정보" onClicked={morefetch}>
        {boards.map((d, index) => (
          <Box key={d.boardId}>
            <BoardPreview {...d} />
            {boards.length - 1 > index && (
              <HorizontalDivider marginBottom="25px" />
            )}
          </Box>
        ))}
      </SeeMoreContainer>
    </Box>
  );
};
export default BoardPreviewList;
