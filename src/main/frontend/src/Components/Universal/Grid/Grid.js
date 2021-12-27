import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, ${(props) => props.gridSize});
  grid-gap: ${(props) => props.gridGap};
  margin-bottom: ${(props) => props.gridGap};
`;

export const Template = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.colSize}, 1fr)`};
`;
