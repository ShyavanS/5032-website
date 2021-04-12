import React from "react";
import mech from "../assets/mechlead.jpg";
import cap from "../assets/teamcap.jpg";
import bus from "../assets/buslead.jpg";
import prog from "../assets/proglead.jpg";
import "../styles/who-we-are.css";

function WhoWeAre(): JSX.Element {
  return (
    <div className='WhoWeAre'>
      <h1 className='textleft'>Team Captain</h1>
      <img className='imgleft' src={cap} alt="Team Captain" />
      <h1 className='textright'>Mechanical Lead</h1>
      <img className='imgright' src={mech} alt="Mechanical Lead" />
      <h1 className='textleft'>Programming Lead</h1>
      <img className='imgleft' src={prog} alt="Programming Lead" />
      <h1 className='textright'>Business Lead</h1>
      <img className='imgright' src={bus} width="20%" alt="Business Lead" />
      <p></p>
      <br></br>
      <p></p>
      <br></br>
      <p></p>
      <br></br>
      <p></p>
    </div>
  );
}

export default WhoWeAre;
