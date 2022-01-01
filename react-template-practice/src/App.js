import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Profile" element={<Profile />} />
        <Route exact path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
