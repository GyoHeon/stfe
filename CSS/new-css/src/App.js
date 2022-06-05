import "./App.css";

function App() {
  return (
    <>
      <div className="background--color"></div>
      <div className="accent--color">
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
        <br />
        <input type="radio" name="radio" value="check" />
        <input type="radio" name="radio" value="check" />
        <input type="radio" name="radio" value="check" />
        <br />
        <input type="range" />
        <br />
        <progress />
      </div>
      <div className="contrast--color">COLOR CONTRAST</div>

      <div className="in">
        <p>nohas</p>
      </div>

      <div className="in">
        <span>:has()</span>
      </div>
    </>
  );
}

export default App;
