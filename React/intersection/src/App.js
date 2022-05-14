import styled from "@emotion/styled";
import Rect from "./Rect";
import Header from "./Header";
import Dim from "./Dim";

function App() {
  return (
    <Wrapper>
      <Rect />

      <Header />
      <Dim />

      <Rect />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    margin: 100px 0;
  }
`;

export default App;
