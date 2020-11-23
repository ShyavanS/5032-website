import React from 'react';

function Navbar() {
  return (
    
    <div className="Navbar">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <a href="/"><i className="fa fa-fw fa-home"></i>Home</a>
      {/* <a href="/about"><i className="fa fa-fw fa-info-circle"></i>About</a>  ignore please */}
      <button className="dropbtn">About
        <i className="fa fa-fw fa-info-circle"></i>
      </button>
      <div className="dropdown-content">
        <a href="/about-our-team">About our Team </a>
        <a href="/who-we-are">Who we are </a>
        <a href="#">Link 3</a>
      </div>
      <a href="/sponsors"><i className="fa fa fw fa-star"></i>Sponsors</a>
      <a href="/documents"><i className="fa fa fw fa-book"></i>Documents</a>
    </div>
  );
}


export default Navbar;
