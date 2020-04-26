import React from 'react';
import { TableHeader } from './TableHeader';
import { TableRows } from './TableRows';
import './Table.css';

export const Table = () => (
  <table border="1" cellPadding="4" cellSpacing="0">
    <thead className="table-header">
      <TableHeader />
    </thead>
    <TableRows />
  </table>
);
