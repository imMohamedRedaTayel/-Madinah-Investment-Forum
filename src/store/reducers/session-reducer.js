import { GET_SESSIONS } from "../actions/session-action";


export const SessionReducers = (state = [], action) => {
  switch (action.type) {
    case GET_SESSIONS:
      return [...action.payload];
    default:
      return state;
  }
};