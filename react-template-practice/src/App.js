import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/Profile" component={Profile} />
      <Route exact path="/Profile/:id" component={Profile} />
      <Route exact path="/About" component={About} />
    </BrowserRouter>
  );
}

export default App;
