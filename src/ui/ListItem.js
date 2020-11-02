import styled from "styled-components";
import Colors from "../utility/Colors";
import Label from "./ui-library/Label";
import Paper from "./ui-library/Paper";
import { NavLink } from "react-router-dom";

const ItemLabel = styled(Label)`
  color: ${Colors.darkCyan};
`;
const Link = styled(NavLink)`
  outline: none;
  text-decoration: none;
`;
const ListItem = () => (
  <Link to="/Jalandhar">
    <Paper width="90%" padding="20px">
      <ItemLabel>Jalandhar</ItemLabel>
      {/* <GoIcon /> */}
    </Paper>
  </Link>
);
export default ListItem;
