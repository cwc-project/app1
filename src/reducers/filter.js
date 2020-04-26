import { SET_FILTER, RESET_FILTER } from '../actions/filter';
import { DEFAULT } from '../constants';

export const filter = (state = DEFAULT, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.value;

    case RESET_FILTER:
      return DEFAULT;
      
    default:
      return state;
  }
};
