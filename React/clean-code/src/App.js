import "./App.css";
import { useState } from "react";
import Compo from "./components/Compo";
import Brace from "./components/Brace";
import ComInSimp from "./components/ComInSimp";
import Simp from "./components/Simp";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => setIsLoading(false), 2000);

  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    return setInputValue(e.target.value);
  };

  return (
    <div className="App">
      <ol>
        <li>
          <h1>AND</h1>
          <p>
            굳이 삼항연산자를 사용하지 않아도 되는 경우에도 삼항연산자가 과하게
            사용되는 부분이 있다.
            <br />
            이를 막기위해 && 연산자를 사용하여 조건을 달아주면 코드가
            깔끔해진다.
          </p>

          {isLoading && <div>Now Loading!</div>}
          {/* {isLoading ? <div>Now Loading!</div> : null} */}
        </li>
        <li>
          <h1>Ternary</h1>
          <p>
            반대로 true와 false에 각각 다른 상황을 부여하려면 삼항연산자를
            사용하는 것이 좋다.
          </p>

          {isLoading ? <div>Now Loading!</div> : <div>Now Done!</div>}
          {/* {isLoading && <div>Now Loading!</div>}
          {!isLoading && <div>Now Done!</div>} */}
        </li>
        <li>
          <h1>True on props</h1>
          <p>
            컴포넌트에 값이 true인 프롭스를 전달할 때에는 단순히 프롭스의 이름만
            전달하는 것이 깔끔하다.
          </p>

          {/* <Compo /> */}
          <Compo load />
          <Compo load={true} />
        </li>
        <li>
          <h1>Curly?</h1>
          <p>
            리액트에서는 단순한 텍스트를 사용할 때에도
            <span> &#123; &#125;</span>
            가 자주 사용되는 경향이 있다.
            <br />
            단순한 텍스트는 텍스트만 사용하는 것이 좋다.
          </p>

          <Brace str="Lee GyoHeon" />
          {/* <Brace str={"Lee GyoHeon"} /> */}
          <img
            src="https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip"
            width="300"
            height="300"
            alt="s"
          />
          {/* <img
            src={
              "https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip"
            }
            width={300}
            height={300}
            alt="s"
          /> */}
        </li>
        <li>
          <h1>Event Props</h1>
          <p>
            인자가 있는 함수는 보통 애로우 함수를 사용하여 전달하게 된다.
            <br />
            이는 인자가 있는 함수만 사용하면 컴파일러가 이를 그저 실행하라는
            뜻으로 해석하기 때문이다.
            <br />
            그러나 인자가 Event 하나라면 굳이 애로우 펑션을 쓰지 않아도 함수가
            잘 작동한다.
          </p>

          <input value={inputValue} onChange={handleChange} />
          {/* <input value={inputValue} onChange={(e) => handleChange(e)} /> */}
        </li>
        <li>
          <h1>Components for Props</h1>
          <p>
            프롭스를 받지 않는 컴포넌트를 프롭스로 전달할 때에는 컴포너트를
            함수나 태그로 전달하지 않고 단순 이름으로 전달하는 것이 좋다.
          </p>

          <ComInSimp Child={Simp} />

          {/* <ComInSimp Child={() => Simp()} /> */}
          {/* <ComInSimp Child={() => <Simp />} /> */}
        </li>
        <li>
          <h1>Use updater</h1>
          <p>
            새로운 상태가 이전 상태값에 의존한다면 updater를 사용해야 합니다.
          </p>
        </li>
      </ol>
    </div>
  );
}

export default App;
