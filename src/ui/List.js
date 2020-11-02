import styled from "styled-components";
import ListItem from "./ListItem";
import Colors from "../utility/Colors";
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  overflow: scroll;
  height: 500px;
  margin-top: 20px;
`;

const List = () => (
  <ListContainer>
    {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((item) => (
      <ListItem />
    ))}
  </ListContainer>
);
export default List;
