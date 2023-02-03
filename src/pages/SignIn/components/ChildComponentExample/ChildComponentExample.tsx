import { ChildComponentExampleProps } from "./types";

const ChildComponentExample: React.FC<ChildComponentExampleProps> = ({
  value,
}) => {
  return <div>{value}</div>;
};

export default ChildComponentExample;
