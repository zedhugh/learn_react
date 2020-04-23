import React from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import Text from './test';
import { store } from './redux_demo';
import Doctor from './doctor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Text />
        <Provider store={store}>
          <Doctor />
          <Counter />
        </Provider>
      </header>
    </div>
  );
}

export default App;
