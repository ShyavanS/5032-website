import React from "react";
import thk from "../assets/thklogo.png";
import conovey from "../assets/conoveylogo.png";
import smc from "../assets/smclogo.png";
import gm from "../assets/gmlogo.png";
import matman from "../assets/matmanlogo.png";
import starmill from "../assets/starmilllogo.png";
import "../styles/sponsors.css";

function Sponsors() {
  return (
    <div className='Sponsors'>
      <img src={thk} alt="THK Logo" />
      <img src={conovey} alt="Conovey Logo" />
      <img src={smc} alt="SMC Logo" />
      <img src={gm} alt="GM Logo" />
      <img src={matman} alt="MatMan Logo" />
      <img src={starmill} alt="Starmill Manufacturing Logo" />
    </div>
  );
}

export default Sponsors;
