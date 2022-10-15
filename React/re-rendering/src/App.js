import "./App.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    my: "lgh",
  });

  console.log(user);

  const nameHandler = () => {
    user.my = "Lee Gyo Heon";
    setUser(user);
    console.log(user);
  };

  // const nameHandler = () => {
  //   console.log(user);

  //   setUser({ name: "Lee Gyo Heon" });

  //   console.log(user);
  // };

  return (
    <div className="App">
      {user.my}
      <div>
        <button onClick={nameHandler}>change name</button>
      </div>
    </div>
  );
}

export default App;
