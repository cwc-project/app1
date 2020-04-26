import { DEFAULT } from '../../constants';
import { setFilter, resetFilter } from '../../actions/filter';
import { filter } from '../filter';

describe('filter reducer', () => {
  it('should handle initial state', () => {
    expect(filter(undefined, { type: '@@INIT' })).toEqual(DEFAULT);
  });

  it('should handle SET_FILTER', () => {
    expect(filter(DEFAULT, setFilter('Tefal'))).toEqual('Tefal');
    expect(filter('Tefal', setFilter('Tescoma'))).toEqual('Tescoma');
  });

  it('should handle RESET_FILTER', () => {
    expect(filter(DEFAULT, resetFilter())).toEqual(DEFAULT);
    expect(filter('Tefal', resetFilter())).toEqual(DEFAULT);
  });
});
