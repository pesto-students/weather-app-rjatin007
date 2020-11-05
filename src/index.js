import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import rootReducer from "./store/rootReducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// setting up devtools

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk))
);
const MainApp = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(MainApp, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
