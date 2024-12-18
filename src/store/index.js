import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { AuthReducers } from "./reducers/auth-reducer";
import { SessionReducers } from "./reducers/session-reducer";
const appReducers = combineReducers({
  UserInfo: AuthReducers,
  SessionList:SessionReducers
});
export const store = createStore(appReducers, applyMiddleware(thunk));
