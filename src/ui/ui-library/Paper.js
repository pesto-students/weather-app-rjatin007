import styled from "styled-components";
import Colors from "../../utility/Colors";
const Paper = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => (padding ? padding : "10px")};
  box-shadow: 0px 0px 5px 1px ${Colors.gray};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
`;
export default Paper;
