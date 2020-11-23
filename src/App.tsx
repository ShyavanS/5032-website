import React from 'react';
import './styles/App.css';
import testpage from './pages/testpage';
import Home from './pages/home';
import NavBar from './pages/navbar';
import About from './pages/about';
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
