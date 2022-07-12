import React from "react";
import MultiplePizzas from "../assets/Historia.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Nuestra Historia</h1>
        <p>
        En 1895 un chef llamado Louis Lassen, de Connecticut, Estados Unidos, elabora la primera hamburguesa 
        en Norteamérica; la receta se la dieron unos marineros provenientes del puerto de Hamburgo.
        
        </p>
      </div>
    </div>
  );
}

export default About;
