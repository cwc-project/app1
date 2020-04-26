import { CHOOSE_PAGE } from '../actions/navigation';

const initialState = {
  page: 0,
};

export const navigation = (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_PAGE: {
      return { ...state, page: action.page };
    }

    default:
      return state;
  }
};
