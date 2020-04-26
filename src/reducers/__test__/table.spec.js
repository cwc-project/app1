import data from '../../data/db.json';
import { setCount } from '../../actions/table';
import { table } from '../table';

const initialState = {
  data,
  count: data.length,
};

describe('table reducer', () => {
  it('should handle initial state', () => {
    expect(table(undefined, { type: '@@INIT' })).toEqual(initialState);
  });

  it('should handle SET_COUNT', () => {
    expect(table(initialState, setCount(6))).toEqual({ data, count: 6 });
    expect(table({ data, count: 6 }, setCount(5))).toEqual({ data, count: 5 });
  });
});
