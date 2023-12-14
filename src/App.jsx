import React from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import "./App.css";
import { Provider } from "react-redux";
import store from "./utils/store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Body />
      </div>
    </Provider>
  );
};

export default App;
