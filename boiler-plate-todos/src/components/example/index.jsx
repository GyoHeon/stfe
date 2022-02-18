import React, { useState } from "react";
import PropTypes from "prop-types";
import { ExampleWrapper, Input, Ul, Li } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "@reducers/todos/todos";

const Example = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value);
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      dispatch(todoActions.ADD(text));
      setText("");
    }
  };

  return (
    <ExampleWrapper>
      <Input
        placeholder="add To Do"
        value={text}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <Ul>
        {todos.todos.map((todo) => (
          <Li key={todo.id}>{todo.content}</Li>
        ))}
      </Ul>
    </ExampleWrapper>
  );
};

// Typescript를 적용하지 않은 대신 propTypes를 사용하여 안정성을 더했습니다.
// prop:PropsTypes.type 의 형태로 사용해주시면 됩니다.

Example.propTypes = {
  exampleMessage: PropTypes.string.isRequired,
};

export default Example;
