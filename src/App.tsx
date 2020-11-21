import React from 'react';
import logo from './Falcons.svg';
import './App.css';
import testpage from './testpage';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path="/testpage" component={testpage} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Coming Soon!
        </p>
      </header>
    </div>
  );
}

export default App;
