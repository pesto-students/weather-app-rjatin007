import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingSearch from "./containers/LandingSearch";
import Title from "./ui/Title";
import styled from "styled-components";
import Weather from "./containers/Weather";
import Colors from "./utility/Colors";
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-right: 50px;
  background-color: ${Colors.black};
`;
const Header = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
`;

function App() {
  return (
    <AppContainer>
      <Header>
        <Title />
      </Header>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingSearch} />
          <Route exact path="/:city" component={Weather} />
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
