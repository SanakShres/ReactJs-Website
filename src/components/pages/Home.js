import React, { Component } from "react";

import Header from "../common/Header";
import image from "../assets/img/header-bg.jpg";

import Services from "../common/Services";
import Portfolio from "../common/Portfolio";
import Timeline from "../common/Timeline";
import Team from "../common/Team";
import Clients from "../common/Clients";
import Contact from "./Contact";
import Footer from "../common/Footer";

import "../common/LayeredWave.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Header
          title="Welcome To Our Studio!"
          subtitle="It's Nice To Meet You"
          buttonText="Tell Me More"
          link="/services"
          showButton={true}
          image={image}
        />
        <Services />
        <Portfolio />
        <Timeline />
        <div className="spacer layer1"></div>
        <Team />
        <Clients />
        <Contact />
        <div className="spacer layer2"></div>
        <Footer />
      </div>
    );
  }
}

export default Home;
