import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

const MyButton = styled.button`
  border: solid red;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>src/App.js</code>
          and save sto reload.
        </p>
        <MyButton>red</MyButton>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
