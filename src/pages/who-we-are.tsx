import React from "react";
import mech from "../assets/IMG_20200302_004453_540.jpg";
import cap from "../assets/IMG_20191126_130032_153.jpg";
import bus from "../assets/IMG_20201211_170731006.jpg";
import prog from "../assets/IMG-1447.jpg";

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
