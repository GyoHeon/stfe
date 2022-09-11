let number = 300;

const OuterVariable = ({ num }) => {
  const onClickHandler = () => {
    number++;
  };

  return (
    <div
      style={{
        border: "1px solid orange",
        width: "200px",
        padding: "30px",
        margin: "50px auto",
      }}
    >
      OuterVariable : {number}
      <br />
      State : {num}
      <br />
      <button onClick={onClickHandler}>OuterVariable plus</button>
    </div>
  );
};

export default OuterVariable;
