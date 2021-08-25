import React, { Component } from "react";

import Header from "../common/Header";
import image from "../assets/img/about.jpg";

import Timeline from "../common/Timeline";
import Footer from "../common/Footer";

class About extends Component {
  render() {
    return (
      <div>
        <Header
          title="About Us"
          subtitle="Why us: It tells you a story."
          showButton={false}
          image={image}
        />
        <Timeline />
        <Footer />
      </div>
    );
  }
}

export default About;
