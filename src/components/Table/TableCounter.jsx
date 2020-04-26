import React, { memo } from 'react';
import { connect } from 'react-redux';
import { TABLE_COLUMNS } from '../../constants';

const TableCounterComponent = ({ count }) => (
  <tfoot>
    <tr>
      <th colSpan={TABLE_COLUMNS.length - 1} align="left">
        Количество товаров:
      </th>
      <th>{count}</th>
    </tr>
  </tfoot>
);

const mapStateToProps = ({ table }) => ({
  count: table.count,
});

export const TableCounter = connect(mapStateToProps)(
  memo(TableCounterComponent),
);
