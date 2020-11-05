import styled from "styled-components";
import Label from "./ui-library/Label";
import FlexColumnContainer from "./ui-library/FlexColumnContainer";
import Colors from "../utility/Colors";
import { webSizes } from "../utility/Fonts";
import moment from "moment-timezone";

const ForcastValuesInfoSet = styled(FlexColumnContainer)`
  height: 100%;
  border-right: ${({ border }) => border && `1px solid ${Colors.darkTeal}`};
  margin: 20px;
`;

const InfoValues = styled(Label)`
  font-size: ${webSizes.small}px;
  padding: 5px;
  margin: 5px;
  font-weight: ${({ bold }) => bold};
`;
const DisplayForecastInfo = ({ current, tag, border, timezone }) => {
  const timeFormat = tag === "Time" ? "LT" : "dddd";
  const { dt, feels_like, humidity, pressure, temp, wind_speed } = current;

  return (
    <ForcastValuesInfoSet border={border}>
      {tag && (
        <InfoValues bold={"bold"}>
          {moment.tz(dt * 1000, timezone).format(timeFormat)}
        </InfoValues>
      )}
      <InfoValues>{temp.day || temp} </InfoValues>
      <InfoValues>{feels_like.day || feels_like}</InfoValues>
      <InfoValues>{humidity}</InfoValues>
      <InfoValues>{pressure}</InfoValues>
      <InfoValues>{wind_speed}</InfoValues>
    </ForcastValuesInfoSet>
  );
};

export default DisplayForecastInfo;
