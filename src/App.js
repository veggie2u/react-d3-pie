import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PieChart from './Piechart';

class App extends Component {
  render() {
    const data = [
      {value: 34, label: 'Apples'},
      {value: 92, label: 'Code'},
      {value: 50, label: 'Dogs'},
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React - D3 - Pie</h1>
        </header>
        <PieChart outerRadius={100} innerRadius={50} data={data} />
      </div>
    );
  }
}

export default App;
