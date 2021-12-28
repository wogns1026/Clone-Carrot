import React from "react";
import { Box, FlexBox, HorizontalDivider, Text } from "Components/Universal";
import Review from "./Review";

const ReviewList = ({ boardId }) => {
  const ReviewData = [
    {
      reviewId: "1",
      parentReviewId: "1",
      name: "미운오리새끼",
      location: "동구 수정제5동",
      Review: `아이에겐 평생 한번 있는 상인데
그것을 공유하는건
그 아이가 커서 당신의 환갑잔치상을 여러사람과 공유한다면 ....
내자식 내부모에게
아까운게 아닙니다`,
    },
    {
      reviewId: "2",
      parentReviewId: "1",
      name: "사부",
      location: "동구 초량제2동",
      Review: `너무 옛날 사고 방식인거같아요;;
요즘은 세트식으로 예쁘게 만들어진 모형같은 것들을 백일상으로 대여줘해요~~
코로나라 어쩔 수 없이 집에서 기념으로 사진이라도 남길려고 촬영 소품으로 비싼돈주고 빌려오시는건대 당연히 일정이 비슷한 가정이 있으면 더치페이해서 부담을 나누면 좋죠 ㅡㅡ
무슨 돈이 아깝다..만다.. 이런소리를 하시는지… 제 눈에는 알뜰한 어머니로 보이네요. 잘 모르시면 훈수 두지않으셨음 좋겠어요 ~~`,
    },
    {
      reviewId: "3",
      parentReviewId: "3",
      name: "하우",
      location: "중구 영주제1동",
      Review: `좋은생각인거 같습니당`,
    },
  ];

  const rootReviews = () =>
    ReviewData.filter((d) => d.reviewId === d.parentReviewId);
  const childReviews = (rootData) =>
    ReviewData.filter(
      (d) =>
        d.parentReviewId !== d.reviewId &&
        d.parentReviewId === rootData.reviewId
    );

  const getReviews = rootReviews().map((rootData) => (
    <Box>
      <Review {...rootData} />
      <HorizontalDivider marginTop="20px" marginBottom="20px" />
      {childReviews(rootData).map((childData) => (
        <>
          <FlexBox>
            <Text marginRight="12px">ㄴ</Text>
            <Review {...childData} />
          </FlexBox>
          <HorizontalDivider marginTop="20px" marginBottom="20px" />
        </>
      ))}
    </Box>
  ));

  return (
    <Box fullSize borderRadius="10px">
      <Box marginBottom="30px">
        <Text fontSize="17px" fontWeight={600}>
          {`댓글 ${ReviewData.length}`}
        </Text>
      </Box>
      {getReviews}
    </Box>
  );
};
export default ReviewList;
