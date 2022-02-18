import React from "react";
import reactDOM from "react-dom";
import { Provider } from "react-redux";
import Example from "./components/example";
import GlobalStyle from "./GlobalStyle";
import store from "./store/store";

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <GlobalStyle />
        <Example />
      </Provider>
    </React.StrictMode>
  );
};

reactDOM.render(<App />, document.getElementById("root"));
