import React from 'react';

function NavBar() {
  return (
    
    <div className="Navbar">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <a href="/"><i className="fa fa-fw fa-home"></i>Home</a>
      <a href="/about"><i className="fa fa-fw fa-info-circle"></i>About</a>
      <a href="/sponsors"><i className="fa fa fw fa-star"></i>Sponsors</a>
      <a href="/documents"><i className="fa fa fw fa-book"></i>Documents</a>
    </div>
  );
}


export default NavBar;
