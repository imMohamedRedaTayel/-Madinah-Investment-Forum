import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { AuthReducers } from "./reducers/auth-reducer";
import { SessionReducers } from "./reducers/session-reducer";
import { PartnersReducers } from "./reducers/parents-reducer";

const appReducers = combineReducers({
  UserInfo: AuthReducers,
  SessionList: SessionReducers,
  Partners: PartnersReducers,
});
export const store = createStore(appReducers, applyMiddleware(thunk));
