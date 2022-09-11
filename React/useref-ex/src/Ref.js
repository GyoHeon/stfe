import { useRef } from "react";

const Ref = ({ num }) => {
  const numRef = useRef(300);
  const onClickHandler = () => {
    numRef.current++;
    console.log("ref : ", numRef.current);
  };

  return (
    <div
      style={{
        border: "1px solid blue",
        width: "200px",
        padding: "30px",
        margin: "50px auto",
      }}
    >
      Ref : {numRef.current}
      <br />
      State : {num}
      <br />
      <button onClick={onClickHandler}>ref plus</button>
    </div>
  );
};

export default Ref;
