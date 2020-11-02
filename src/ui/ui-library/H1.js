import styled from "styled-components";

const H1 = styled.h1`
  font-size: ${({ size }) => size}px;
  width: auto;
  padding: 10px;
  color: ${({ color }) => color};
  text-align: center;
  margin: 5px auto;
`;

export default H1;
