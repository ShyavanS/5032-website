import React from "react";
import thk from "../assets/thklogo.png";
import conovey from "../assets/conoveylogo.png";
import sikhmc from "../assets/smc_logo.png";
import gm from "../assets/general-motors-logo.png";
import matman from "../assets/matmanlogo.png";
import starmill from "../assets/starmilllogo.png";
import "../styles/sponsors.css";

function Sponsors() {
  return (
    <div className='Sponsors'>
      <img src={thk} width="30%" />
      <br></br>
      <img className="conoveylogo" src={conovey} width="40%" />
      <img className="sikhlogo" src={sikhmc} width="10%" />
      <img src={gm} width="20%" />
      <br></br>
      <img className="matman" src={matman} width="30%" />
      <img className="starmill" src={starmill} width="30%" />
    </div>
  );
}

export default Sponsors;
