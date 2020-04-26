export const SET_FILTER = 'SET_FILTER';
export const RESET_FILTER = 'RESET_FILTER';

export const setFilter = (value) => ({
  type: SET_FILTER,
  value,
});

export const resetFilter = () => {
 return ({
  type: RESET_FILTER,
})};
