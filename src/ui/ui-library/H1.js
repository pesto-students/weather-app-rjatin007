import styled from "styled-components";

const H1 = styled.h1`
  font-size: ${({ size }) => size}px;
  padding: 10px;
  color: ${({ color }) => color};
  text-align: center;
  margin: 5px auto;
  margin-left: 20px;
`;

export default H1;
