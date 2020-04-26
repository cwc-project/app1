import dictionary from '../dictionary/en-ru.json';
import { translate } from './translate';

describe('translate util', () => {
  it('should run without arguments', () => {
    expect(translate()).toEqual('-');
  });

  it('should translate dictionary value', () => {
    expect(translate('artnumber')).toEqual('Артикул');
  });

  it('should return parameter', () => {
    expect(translate('asdfasdffa')).toEqual('asdfasdffa');
  });
});
