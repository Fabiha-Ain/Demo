import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Blog from "./Blog";

const Home = () => {
  const [index, setIndex] = useState(0);
  const texts = [
    "Geographer",
    "Singer",
    "Artist",
    "Researcher",
    "GIS Analyst",
    "Meteorologist",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [texts.length]); // Include texts.length in the dependency array

  return (
    <div>
      <div className="home-container">
        <div className="text-container">
          <h5>Hi There! I'm</h5>
          <h1>Fariha Chowdhury Zain</h1>
          <p>{texts[index]}</p>
          <div className="button-container">
            <NavLink to="/blog" className="white-button">
              Read My Articles
            </NavLink>
            <NavLink to="/contact" className="white-button">
              Contact Me
            </NavLink>
          </div>
        </div>
        <img
          src="https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
          alt="Background"
        />
      </div>
      <About />
      <Portfolio />
      <Blog />
      <Contact />
    </div>
  );
};

export default Home;
