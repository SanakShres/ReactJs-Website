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
        <Team />
        <Clients />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;
