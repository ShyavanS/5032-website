import React from "react";
import mech from "../assets/mechlead.jpg";
import cap from "../assets/teamcap.jpg";
import bus from "../assets/buslead.jpg";
import prog from "../assets/proglead.jpg";

function WhoWeAre(): JSX.Element {
  return (
    <div className='WhoWeAre'>
      <h1>Team Captain</h1>
      <img src={cap} width="10%" alt="Team Captain" />
      <h1>Mechanical Lead</h1>
      <img src={mech} width="10%" alt="Mechanical Lead" />
      <h1>Programming Lead</h1>
      <img src={prog} width="10%" alt="Programming Lead" />
      <h1>Business Lead</h1>
      <img src={bus} width="10%" alt="Business Lead" />
      <p></p>
      <br></br>
      <p></p>
    </div>
  );
}

export default WhoWeAre;
