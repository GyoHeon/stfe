const Link = ({ href = "/", title }) => {
  const clickHandler = (e) => {
    e.preventDefault();
    window.history.pushState({}, "", href);
  };

  return <button onClick={clickHandler}>{title}</button>;
};

export default Link;
