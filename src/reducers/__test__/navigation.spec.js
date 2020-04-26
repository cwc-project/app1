import { choosePage } from '../../actions/navigation';
import { navigation } from '../navigation';

const initialState = {
  page: 0,
};

describe('navigation reducer', () => {
  it('should handle initial state', () => {
    expect(navigation(undefined, { type: '@@INIT' })).toEqual(initialState);
  });
  it('should handle CHOOSE_PAGE', () => {
    expect(navigation(initialState, choosePage(1))).toEqual({page: 1});
    expect(navigation({page: 2}, choosePage(1))).toEqual({page: 1});
  });
});
