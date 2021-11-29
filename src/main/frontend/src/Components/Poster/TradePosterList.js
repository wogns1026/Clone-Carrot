import React from "react";
import Loader from "Components/Loading/Loader";
import TradePoster from "./TradePoster";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid blue;
  width: 1024px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 210px);
  grid-gap: 60px;
`;

const TradePosterList = ({ posterList, loading, error }) => {
  return loading ? (
    <Loader />
  ) : (
    <Container>
      <Grid>
        {posterList.map((post) => (
          <TradePoster
            key={post.id}
            id={post.id}
            posterImgUrl={post.imgUrl}
            title={post.title}
            price={post.price}
            location={post.location}
            interest={post.interest}
          />
        ))}
      </Grid>
    </Container>
  );
};
export default TradePosterList;
