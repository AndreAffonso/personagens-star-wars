import { FETCH_PEOPLE, FETCH_NEW_PAGE } from '../actions/types';

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PEOPLE:
      return {
        ...state,
        items: action.payload
      };
    case FETCH_NEW_PAGE:
      return {
        ...state,
        items: [...state.items, ...action.payload]
      };
    default:
      return state;
  }
}
