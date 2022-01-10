import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Modal from "./components/modal";

// const Person = React.memo(({ name, age }) => {
//   console.log("Person render");
//   return (
//     <div>
//       {name} / {age}
//     </div>
//   );
// });

// function App() {
//   const [state, setState] = React.useState({
//     text: "",
//     persons: [
//       { id: 1, name: "Mark", age: 39 },
//       { id: 2, name: "Hanna", age: 29 },
//     ],
//   });

//   const { text, persons } = state;

//   return (
//     <div>
//       <input type="text" value={text} onChange={change} />
//       <ul>
//         {persons.map((person) => (
//           <Person {...person} key={person.id} />
//         ))}
//       </ul>
//     </div>
//   );

//   function change(e) {
//     setState({
//       ...state,
//       text: e.target.value,
//     });
//   }
// }

function App() {
  const [visible, setVisible] = useState(false);

  const open = () => {
    setVisible(true);
  };
  const close = () => {
    setVisible(false);
  };

  return (
    <div>
      <button onClick={open}>open</button>
      {visible && (
        <Modal>
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "tomato",
            }}
            onClick={close}
          >
            Hello
          </div>
        </Modal>
      )}
    </div>
  );
}

export default App;
