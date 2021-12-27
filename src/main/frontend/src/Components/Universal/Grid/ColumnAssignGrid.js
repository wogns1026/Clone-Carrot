import { Template } from "./Grid";
const ColumnAssignGrid = ({ colSize, children }) => {
  return <Template colSize={colSize}>{children}</Template>;
};
export default ColumnAssignGrid;
