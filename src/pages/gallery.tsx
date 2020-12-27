import React from "react";
import shoot_pro from "../assets/shooter_proto.jpg";
import eat_pizza from "../assets/eating_pizza.jpg";
import ally_robot from "../assets/alliance_robot.jpg";
import attatch_climb from "../assets/attaching_climb.jpg";
import stefan_layth from "../assets/stefan_layth.jpg";
import balc_pits from "../assets/balcita_pits.jpg";
import gr9_chass from "../assets/gr9s_chassis.jpg";

function Gallery() {
  return (
    <div className="Gallery">
      <h3>Gallery</h3>
      <img src={shoot_pro} width="20%" alt="Shooter Prototype" />
      <img src={eat_pizza} width="20%" alt="Eating pizza on break!" />
      <img src={ally_robot} width="20%" alt="Three robots from alliances" />
      <img src={attatch_climb} width="20%" alt="Attatching the climb" />
      <br></br>
      <img src={stefan_layth} width="20%" alt="Machining parts" />
      <img src={balc_pits} width="20%" alt="Mr. Balcita in the pits!" />
      <img src={gr9_chass} width="20%" alt="Grade 9s working on a tutorial chassis" />
    </div>
  );
}

export default Gallery;
