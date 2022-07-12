import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/hamburguesa.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>El Krustaceo Kascarudo </h1>
        <p>Las Mejores Hamburguesas.</p>
        <Link to="/menu">
          <button> Ordena Ahora </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
