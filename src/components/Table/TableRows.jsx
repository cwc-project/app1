import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { setCount } from '../../actions/table';
import { TableCounter } from './TableCounter';
import { TABLE_COLUMNS, DEFAULT, ITEMS_PER_PAGE } from '../../constants';

const TableRowsComponent = ({ data, filterName, page, onSetCount }) => {
  const getFilteredRows = () => {
    let filteredRows = [];

    if (filterName === DEFAULT) {
      filteredRows = data;
    } else {
      filteredRows = data.filter((item) => item.brand === filterName);
    }
    return filteredRows;
  }
  const filteredRows = getFilteredRows();
  useEffect(() => {
    onSetCount(filteredRows.length)
  });

  const firstIndex = page * ITEMS_PER_PAGE;
  const lastIndex = firstIndex + ITEMS_PER_PAGE;
  const selectedRows = filteredRows.slice(firstIndex, lastIndex);

  return (
    <>
      <tbody>
        {selectedRows.map((row) => (
          <tr key={row.artnumber}>
            {TABLE_COLUMNS.map((cell, idx) => {
              const stock = cell === 'stock';
              return (
                <td key={idx} align={stock ? 'center' : 'right'}>
                  {stock ? (
                    <input
                      type="checkbox"
                      disabled
                      checked={Boolean(row[cell])}
                    />
                  ) : (
                    row[cell] || '-'
                  )}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
      <TableCounter />
    </>
  );
};

const mapStateToProps = ({ table, filter, navigation }) => ({
  data: table.data,
  filterName: filter,
  page: navigation.page,
});

export const TableRows = connect(mapStateToProps, { onSetCount: setCount })(
  memo(TableRowsComponent),
);
