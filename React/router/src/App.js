import "./App.css";
import Link from "./components/Link";

function App() {
  return (
    <div className="App">
      <Link href="/one" title="one" />
      <Link href="/two" title="two" />
      <h1>THIS IS HOME</h1>
    </div>
  );
}

export default App;
