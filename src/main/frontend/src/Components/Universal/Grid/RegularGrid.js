import { Grid } from "./Grid";

const RegularGrid = ({ gridSize, gridGap, children }) => {
  return (
    <Grid gridSize={gridSize} gridGap={gridGap}>
      {children}
    </Grid>
  );
};
export default RegularGrid;
