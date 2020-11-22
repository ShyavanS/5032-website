import React from 'react';
import './App.css';
import testpage from './pages/testpage';
import Home from './Home';
import NavBar from './pages/Navbar';
import About from './pages/About';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/> 
      <Route exact path="/" component={Home} />
      <Route exact path="/testpage" component={testpage} />
      <Route exact path="/about" component={About} />
    </div>
  );
}

export default App;
