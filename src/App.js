import { useContext, createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingSearch from "./containers/LandingSearch";
import Title from "./ui/Title";
import styled from "styled-components";
import Weather from "./containers/Weather";
import SubHeading from "./ui/SubHeading";
const AppContainer = styled.div`
  width: 99%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-right: 50px;
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
  // const [state, setstate] = useState(initialState);
  // const store = useContext(AppContext);

  return (
    <AppContainer>
      <Header>
        <Title />
        <SubHeading />
      </Header>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingSearch} />
          <Route exact path="/jalandhar" component={Weather} />
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
