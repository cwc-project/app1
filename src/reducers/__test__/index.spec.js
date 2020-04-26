import { rootReducer } from '../index';
import { DEFAULT } from '../../constants';
import data from '../../data/db.json';

describe('root reducer', () => {
  it('should combine all reducers', () => {
    expect(rootReducer({}, {type: '@@INIT'})).toEqual({
      table: {
        data,
        count: data.length,
      }, 
      filter: DEFAULT, 
      navigation: {page: 0}, 
    });
  });
});
