import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
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

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotateAnimation} 5s linear infinite;
  span {
    font-size: 50px;
    &:hover {
      font-size: 100px;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>😀</span>
      </Box>
    </Wrapper>
  );
}

export default App;
