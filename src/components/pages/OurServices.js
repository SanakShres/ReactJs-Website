import React, { Component } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Services from "../common/Services";

//images
import headerimg from "../assets/img/services.jpg";

class OurServices extends Component {
  render() {
    return (
      <div>
        <Header
          title="Our Services"
          subtitle="To deliver what our customes wants"
          image={headerimg}
          showButton={false}
        />
        <Services />
        <Footer />
      </div>
    );
  }
}
export default OurServices;
