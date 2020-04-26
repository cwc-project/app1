import dictionary from '../dictionary/en-ru.json';

export const translate = (value) => {
  if (!value) return '-';
  return Object.keys(dictionary).indexOf(value) !== -1
    ? dictionary[value]
    : value;
};
