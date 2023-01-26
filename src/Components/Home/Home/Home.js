import React from "react";
import Feature from "../Feature/Feature";
import LimitServices from "../Services/LimitServices";
import Slider from "../Slider/Slider";
import Team from "../Teams/Team";

const Home = () => {
  return (
    <div className="violetColor">
      <Slider></Slider>
      <LimitServices></LimitServices>
      <Feature></Feature>
      <Team></Team>
    </div>
  );
};

export default Home;
