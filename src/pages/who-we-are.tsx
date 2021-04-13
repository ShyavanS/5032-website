import React from "react";
import mech from "../assets/mechlead.jpg";
import cap from "../assets/teamcap.jpg";
import bus from "../assets/buslead.jpg";
import prog from "../assets/proglead.jpg";
import "../styles/who-we-are.css";

function WhoWeAre(): JSX.Element {
  return (
    <div className='WhoWeAre'>
      <h1>Team Captain</h1>
      <img src={cap} width="20%" alt="Team Captain" />
      <h1>Mechanical Lead</h1>
      <img src={mech} width="20%" alt="Mechanical Lead" />
      <h1>Programming Lead</h1>
      <img src={prog} width="20%" alt="Programming Lead" />
      <h1>Business Lead</h1>
      <img src={bus} width="20%" alt="Business Lead" />
    </div>
  );
}

export default WhoWeAre;
