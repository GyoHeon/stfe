import logo from "./logo.svg";
import "./App.css";
import Ref from "./Ref";
import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  const onClickHandler = () => {
    setNum((prev) => prev + 1);
  };

  return (
    <div className="App">
      <Ref num={num} />
      <button onClick={onClickHandler}>Re-Rendering</button>
    </div>
  );
}

export default App;
