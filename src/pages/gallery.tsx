import React from "react";
import shoot_pro from "../assets/shooter_proto.jpg";
import eat_pizza from "../assets/eating_pizza.jpg";
import ally_robot from "../assets/alliance_robot.jpg";
import attatch_climb from "../assets/attaching_climb.jpg";

function Gallery() {
  return (
    <div className="Gallery">
      <h3>Gallery</h3>
      <img src={shoot_pro} width="20%" alt="Shooter Prototype" />
      <img src={eat_pizza} width="20%" alt="Eating pizza on break!" />
      <img src={ally_robot} width="20%" alt="Three robots from alliances" />
      <img src={attatch_climb} width="20%" alt="Attatching the climb" />
    </div>
  );
}

export default Gallery;
