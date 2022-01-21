import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  width: 300px;
  height: 300px;
  display: flex;
`;

const rotateAnimation = keyframes`
0%{
  transform: rotate(0deg);
  border-radius: 0px;
}
50%{
  transform: rotate(180deg);
  border-radius: 35%;
}
100%{
  transform: rotate(360deg);
  border-radius: 0px;
}`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotateAnimation} 5s linear infinite;
  ${Emoji} {
    &:hover {
      font-size: 100px;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>😀</Emoji>
      </Box>
      <Emoji>😀</Emoji>
    </Wrapper>
  );
}

export default App;
