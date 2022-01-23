import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

interface DummyProps {
  text: string;
  active?: boolean;
}

function Dummy({ text, active = false }: DummyProps) {
  return <H1>{text}</H1>;
}

function App() {
  const onClick = (e: React.FormEvent<HTMLButtonElement>) => {};

  return (
    <Container>
      <Dummy text="hahaha" active />
      <form>
        <button onClick={onClick}>Click ME</button>
      </form>
    </Container>
  );
}

export default App;
