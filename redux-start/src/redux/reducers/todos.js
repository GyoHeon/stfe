import { ADD_TODO, COMPLETE_TODO } from "../actions";

const todosInitialState = [];

// [{text: 'coding', done: 'false'}, {text: 'lunch', done: 'true'}]
export default function todos(previousState = todosInitialState, action) {
  if (action.type === ADD_TODO) {
    return [...previousState, { text: action.text, done: false }];
  }

  if (action.type === COMPLETE_TODO) {
    return previousState.map((todo, index) => {
      if (index === action.index) {
        return { ...todo, done: true };
      }
      return todo;
    });
  }

  return previousState;
}
