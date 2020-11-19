import styled from "styled-components";
import Label from "./ui-library/Label";
import FlexColumnContainer from "./ui-library/FlexColumnContainer";
import FlexRowContainer from "./ui-library/FlexRowContainer";
import Colors from "../utility/Colors";
import { webSizes } from "../utility/Fonts";
import DisplayForecastInfo from "./DisplayForecastInfo";
const ForcastOuterContainer = styled(FlexColumnContainer)`
  justify-content: flex-start;
  padding: 50px;
  padding-top: 20px;
  width: 90%;
  border-radius: 20px;
  margin: 50px auto;
  background-color: ${Colors.white};
`;
const ForcastContainer = styled(FlexRowContainer)`
  justify-content: flex-start;
  width: 100%;
`;
const ForcastLabelsContainer = styled(FlexColumnContainer)`
  width: 30%;
  height: 90%;
  box-shadow: 0px 0px 10px 5px ${Colors.white};
`;
const ForcastValuesContainer = styled(FlexRowContainer)`
  justify-content: flex-start;
  overflow-x: scroll;
  overflow-y: hidden;
  height: 100%;
  padding-bottom: 10px;
  scrollbar-width: thin;
`;

const ForcastLabel = styled(Label)`
  text-transform: capitalize;
  font-weight: light;
  color: ${Colors.darkTeal};
  font-size: ${webSizes.subheading}px;
  padding: 20px;
`;
const InfoLabels = styled(Label)`
  padding: 5px;
  margin: 5px;
  text-align: center;
  fonst-sixe: ${webSizes.small}px;
`;

const Forcast = ({ title, shadowColor, data, tag, timezone }) => {
  return (
    <ForcastOuterContainer color={shadowColor}>
      <ForcastLabel>{title}</ForcastLabel>
      <ForcastContainer>
        <ForcastLabelsContainer>
          <InfoLabels>{tag}</InfoLabels>
          <InfoLabels>Temprature&deg;C</InfoLabels>
          <InfoLabels>Feels Like &deg;C</InfoLabels>
          <InfoLabels>Humidity(%)</InfoLabels>
          <InfoLabels>Pressure(hPa)</InfoLabels>
          <InfoLabels>Wind Speed(m/s)</InfoLabels>
        </ForcastLabelsContainer>

        <ForcastValuesContainer>
          {data &&
            data.map((current, index) => (
              <DisplayForecastInfo
                current={current}
                border={index !== data.length - 1}
                timezone={timezone}
                tag={tag}
              />
            ))}
        </ForcastValuesContainer>
      </ForcastContainer>
    </ForcastOuterContainer>
  );
};

export default Forcast;
