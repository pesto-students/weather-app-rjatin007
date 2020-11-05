import styled from "styled-components";
import Label from "../ui/ui-library/Label";
import FlexColumnContainer from "../ui/ui-library/FlexColumnContainer";
import FlexRowContainer from "../ui/ui-library/FlexRowContainer";
import Icon from "../assets/animated/cloudy-day-1.svg";
import Colors from "../utility/Colors";
import { webSizes } from "../utility/Fonts";
import Forcast from "../ui/Forcast";
import { connect } from "react-redux";
import DisplayForecastInfo from "../ui/DisplayForecastInfo";
import GobackIcon from "../ui/ui-library/icons/GobackIcon";
import Link from "../ui/Link";
const WeatherContainer = styled(FlexColumnContainer)`
  margin-top: 20px;
  width: 100%;
`;
const HeroContainer = styled(FlexRowContainer)`
  width: 70%;
  height: 100%;
  justify-content: center;
  padding: 20px;
`;

const HeroIcon = styled.img`
  width: 400px;
  height: 400px;
`;

const WeatherLabel = styled(Label)`
  text-transform: capitalize;
  font-weight: light;
  color: ${Colors.darkCyan};
  font-size: ${webSizes.subheading}px;
  padding: 20px;
`;

const InfoContainer = styled(FlexRowContainer)`
  width: 50%;
  padding: 20px;
  margin-right: 50px;
  justify-content: space-around;
  border-radius: 20px;
  box-shadow: 0px 0px 40px 5px ${Colors.lightGreen};
`;

const InfoLabels = styled(Label)`
  font-weight: bold;
  padding: 5px;
  margin: 2px auto;
`;

const TopContainer = styled(FlexRowContainer)`
  width: 100%;
  height: 90%;
`;
const BottomContainer = styled(FlexColumnContainer)`
  width: 100%;
  justify-content: flex-start;
  margin: 50px auto;
`;
const GoBack = styled(GobackIcon)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  top: 150px;
  left: 50px;
`;

// const getImageUrl = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;
const Weather = ({ weatherData, currentCity }) => {
  const { current, daily, hourly, timezone } = weatherData;
  // const { weather } = current;
  // console.log(current);
  return (
    <WeatherContainer>
      <WeatherLabel>{currentCity}</WeatherLabel>
      <Link to="/">
        <GoBack />
      </Link>
      <TopContainer>
        <HeroContainer>
          <HeroIcon src={Icon} />
        </HeroContainer>

        <InfoContainer>
          <FlexColumnContainer>
            <InfoLabels>Temparature &deg;C</InfoLabels>
            <InfoLabels>Feels Like &deg;C</InfoLabels>
            <InfoLabels>Humidity(%)</InfoLabels>
            <InfoLabels>Pressure(hPa)</InfoLabels>
            <InfoLabels>Wind Speed(m/s)</InfoLabels>
          </FlexColumnContainer>
          <DisplayForecastInfo current={current} border={false} tag={false} />
        </InfoContainer>
      </TopContainer>

      <BottomContainer>
        <Forcast
          title="Hourly Forecast"
          shadowColor={Colors.lightTeal}
          data={hourly}
          timezone={timezone}
          tag="Time"
        />

        <Forcast
          title="Daily Forecast"
          shadowColor={Colors.lightTeal}
          data={daily}
          timezone={timezone}
          tag="Days"
        />
      </BottomContainer>
    </WeatherContainer>
  );
};
const mapStateToProps = (state) => ({
  weatherData: state.weatherData,
  currentCity: state.currentCity,
});
export default connect(mapStateToProps)(Weather);
