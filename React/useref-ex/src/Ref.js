import { useRef } from "react";

const Ref = ({ num }) => {
  const numRef = useRef(300);
  const onClickHandler = () => {
    numRef.current++;
    console.log(numRef.current);
  };

  return (
    <div>
      Ref : {numRef.current}
      <br />
      State : {num}
      <br />
      <button onClick={onClickHandler}>ref plus</button>
    </div>
  );
};

export default Ref;
