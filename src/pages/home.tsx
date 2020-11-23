import React from 'react';
import logo from '../assets/logo.svg';
import '../styles/navbar.css';

function Home(){
  return(
    <div className="Home">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Coming Soon!
        </p>
      </header>
    </div>
  );
}

export default Home;