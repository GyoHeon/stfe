import { SHOW_COMPLETE, SHOW_ALL } from "../actions";

const filterInitialState = "ALL";

export default function filter(previousState = filterInitialState, action) {
  if (action.type === SHOW_ALL) {
    return "ALL";
  }

  if (action.type === SHOW_COMPLETE) {
    return "COMPLETE";
  }

  return previousState;
}
