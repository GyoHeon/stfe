const InnerVariable = ({ num }) => {
  let number = 300;
  const onClickHandler = () => {
    number++;
    console.log("inner variable : ", number);
  };

  return (
    <div
      style={{
        border: "1px solid red",
        width: "200px",
        padding: "30px",
        margin: "250px auto 50px",
      }}
    >
      InnerVariable : {number}
      <br />
      State : {num}
      <br />
      <button onClick={onClickHandler}>InnerVariable plus</button>
    </div>
  );
};

export default InnerVariable;
