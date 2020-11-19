import styled from "styled-components";
import Colors from "../utility/Colors";
import Label from "./ui-library/Label";
import Paper from "./ui-library/Paper";
import Link from "../ui/Link";
const ItemLabel = styled(Label)`
  color: ${Colors.darkCyan};
  cursor: pointer;
  &:hover {
    color: ${Colors.lightGreen};
    text-decoration: underline;
  }
`;
const InfoContainer = styled(Paper)`
  width: 90%;
  padding: 20px;
  justify-content: flex-start;
`;

const ListItem = ({ city, fetchData }) => (
  <InfoContainer>
    <Link to={`/${city.display_place}`}>
      <ItemLabel onClick={fetchData(city.lon, city.lat, city.display_place)}>
        {city.display_name}
      </ItemLabel>
    </Link>
  </InfoContainer>
);
export default ListItem;
