import "./App.css";
import Ref from "./Ref";
import { useState } from "react";
import InnerVariable from "./InnerVariable";
import OuterVariable from "./OuterVariable";

function App() {
  const [num, setNum] = useState(0);
  const onClickHandler = () => {
    setNum((prev) => prev + 1);
  };

  return (
    <div className="App">
      <Ref num={num} />
      <InnerVariable num={num} />
      <OuterVariable num={num} />
      <OuterVariable num={num} />
      <OuterVariable num={num} />
      <button onClick={onClickHandler}>Re-Rendering</button>
    </div>
  );
}

export default App;
