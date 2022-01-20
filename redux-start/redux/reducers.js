import { ADD_TODO } from "./actions";
// state
// ['coding', 'lunch'];

const initialState = [];

function todoApp(previousState = initialState, action) {
  if (action.type === ADD_TODO) {
    return [...previousState, action.todo];
  }

  return previousState;
}
