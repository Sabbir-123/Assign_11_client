import React from "react";
import Contact from "../Contact/Contact";
import Feature from "../Feature/Feature";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Services></Services>
      <Feature></Feature>
      <Contact></Contact>
    </div>
  );
};

export default Home;
