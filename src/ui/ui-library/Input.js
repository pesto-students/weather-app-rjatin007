import styled from "styled-components";
import Colors from "../../utility/Colors";
import { webSizes } from "../../utility/Fonts";

const Input = styled.input`
  width: 80%;
  padding: 10px;
  font-size: ${webSizes.input}px;
  outline: none;
  border: none;
  text-transform: capitalize;
  border-bottom: 2px solid ${Colors.lightGreen};
`;

export default Input;
