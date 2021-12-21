import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, ${(props) => props.gridSize});
  grid-gap: ${(props) => props.gridGap};
  margin-bottom: ${(props) => props.gridGap};
`;

const Template = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.colSize}, 1fr)`};
`;

export const RegularGrid = ({ gridSize, gridGap, children }) => {
  return (
    <Grid gridSize={gridSize} gridGap={gridGap}>
      {children}
    </Grid>
  );
};

export const ColumnAssignGrid = ({ colSize, children }) => {
  return <Template colSize={colSize}>{children}</Template>;
};
