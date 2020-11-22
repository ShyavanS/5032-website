import React from 'react';
import './App.css';
import testpage from './testpage';
import Home from './Home';
import NavBar from './Navbar';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/> 
      <Route exact path="/" component={Home} />
      <Route exact path="/testpage" component={testpage} />
    </div>
  );
}

export default App;
