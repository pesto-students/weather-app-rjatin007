import styled from "styled-components";
import ListItem from "./ListItem";
import FlexColumnContainer from "../ui/ui-library/FlexColumnContainer";
const ListContainer = styled(FlexColumnContainer)`
  width: 70%;
  justify-content: flex-start;
  padding: 20px;
  height: 600px;
  margin-top: 20px;
  overflow-y: scroll;
`;

const List = ({ cities, fetchData }) => {
  return (
    <ListContainer>
      {cities !== null &&
        cities !== undefined &&
        Array.isArray(cities) &&
        cities.map((city) => <ListItem city={city} fetchData={fetchData} />)}
    </ListContainer>
  );
};
export default List;
