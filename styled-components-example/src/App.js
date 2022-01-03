import logo from "./logo.svg";
import "./App.css";
import StyledButton from "./components/StyledButton";
import StyledA from "./components/StyledA";
import styled, { createGlobalStyle } from "styled-components";

const PrimaryStyledButton = styled(StyledButton)`
  background: skyblue;
  color: white;
  border-color: skyblue;
`;

const UppercaseButton = (props) => (
  <button {...props} children={props.children.toUpperCase()} />
);

const MyButton = (props) => (
  <button {...props} children={`MyButton ${props.children}`} />
);

const StyledMyButton = styled(MyButton)`
  background: white;
  border-radius: 3px;
  border: 2px solid ${(props) => props.color || "violet"};
  color: ${(props) => props.color || "violet"};
  margin: 1em;
  padding: 0.25em 1em;
  font-size: 20px;

  :hover {
    border: 2px solid red;
  }

  ::before {
    content: "@";
  }
`;

const GlobalStyle = createGlobalStyle`
button {
  color: yellow;
}`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <StyledButton>Button</StyledButton>
          <StyledButton primary>Button</StyledButton>
          <PrimaryStyledButton>Button</PrimaryStyledButton>
          <StyledButton as="a" href="/">
            Button
          </StyledButton>
          <StyledButton as={UppercaseButton}>Button</StyledButton>
          <StyledMyButton>Button</StyledMyButton>
          <StyledMyButton color="blue">Button</StyledMyButton>
          <StyledA href="https://google.com">tag</StyledA>
        </p>
      </header>
    </div>
  );
}

export default App;
