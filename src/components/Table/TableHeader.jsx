import React from 'react';
import { translate } from '../../utils/translate';
import { TABLE_COLUMNS } from '../../constants';

export const TableHeader = () => (
  <tr>
    {TABLE_COLUMNS.map((column, idx) => (
      <th key={idx}>{translate(column)}</th>
    ))}
  </tr>
);
