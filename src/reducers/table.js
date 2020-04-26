import data from '../data/db.json';
import { SET_COUNT } from '../actions/table';
import { RESET_FILTER } from '../actions/filter';

const initialState = {
  data,
  count: data.length,
};

export const table = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNT:
      return {
        ...state,
        count: action.count,
      };
    
    case RESET_FILTER:
    default:
      return state;
  }
};
