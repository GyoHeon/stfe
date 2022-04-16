import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [arr, setArr] = useState([0, 1, 2, 3, 4, 5]);

  const [objArr, setObjArr] = useState([
    { id: nanoid(), content: 0 },
    { id: nanoid(), content: 1 },
    { id: nanoid(), content: 2 },
    { id: nanoid(), content: 3 },
    { id: nanoid(), content: 4 },
    { id: nanoid(), content: 5 },
  ]);

  // const addFirst = (newItem) => {
  //   setArr([newItem, ...arr]);
  // };
  // const addLast = (newItem) => {
  //   setArr([...arr, newItem]);
  // };

  const addFirst = (newItem) => {
    setObjArr([{ id: nanoid(), content: newItem }, ...objArr]);
  };
  const addLast = (newItem) => {
    setObjArr([...objArr, { id: nanoid(), content: newItem }]);
  };

  return (
    <div className="App">
      <ul>
        {/* {arr.map((item, index) => {
          return <li key={index}>{item}</li>;
        })} */}

        {objArr.map((item) => {
          return <li key={item.id}>{item.content}</li>;
        })}
      </ul>

      <button onClick={() => addFirst("newFisrt")}>add first</button>
      <button onClick={() => addLast("newLast")}>add last</button>
    </div>
  );
}

export default App;
