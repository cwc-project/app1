import React from 'react';
import { Table } from './components/Table';
import { Filter } from './components/Filter';
import { Navigation } from './components/Navigation';
import './App.css';

const App = () => (
  <div className="App">
    <h1 className="App-header">Cool store</h1>
    <div className="App-container">
      <div className="App-item">
        <Table />
        <Navigation />
      </div>
      <div className="App-item">
        <Filter />
      </div>
    </div>
  </ div>
);

export default App;
