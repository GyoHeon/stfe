import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import { theme } from "./theme";
import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";

const GlobalStyles = createGlobalStyle``;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);
