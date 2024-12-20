import { GET_PATENTS } from "../actions/parents-action";


export const PartnersReducers = (state = [], action) => {
  switch (action.type) {
    case GET_PATENTS:
      return [...action.payload];
    default:
      return state;
  }
};