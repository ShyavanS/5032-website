import React from 'react';
import './styles/App.css';
import Sponsors from './pages/sponsors';
import Home from './pages/home';
import NavBar from './pages/navbar';
import About from './pages/about';
import Footer from './pages/footer'
import Documents from './pages/documents'
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/> 
      <Route exact path="/" component={Home} />
      <Route exact path="/sponsors" component={Sponsors} />
      <Route exact path="/about" component={About} />
      <Route exact path= "/documents" component={Documents} />
      <Footer/>
    </div>
  );
}

export default App;
