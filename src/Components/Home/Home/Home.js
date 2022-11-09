import React from "react";
import Contact from "../Contact/Contact";
import Feature from "../Feature/Feature";
import LimitServices from "../Services/LimitServices";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <LimitServices></LimitServices>
      <Feature></Feature>
      <Contact></Contact>
    </div>
  );
};

export default Home;
