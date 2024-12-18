import { GET_USERINFO } from "../actions/auth-action";


export const AuthReducers = (state = {}, action) => {
  switch (action.type) {
    case GET_USERINFO:
      return action.payload;
    default:
      return state;
  }
};