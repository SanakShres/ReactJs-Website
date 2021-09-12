import React, { Component } from "react";
import SectionHead from "./SectionHead";
import SingleService from "./SingleService";

import "./Curves.css";

const services = [
  {
    title: "E-Commerce",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
    icon: "fa-shopping-cart",
  },
  {
    title: "Responsive Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
    icon: "fa-laptop",
  },
  {
    title: "Web Security",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
    icon: "fa-lock",
  },
];
class Services extends Component {
  render() {
    return (
      <section className="page-section" id="services">
        <div className="container">
          <SectionHead
            heading="Services"
            subheading="Lorem ipsum dolor sit amet consectetur."
          />
          <div className="row text-center">
            {services.map((service, index) => {
              return <SingleService key={index} {...service} />;
            })}
          </div>
        </div>
        <div className="curves"></div>
      </section>
    );
  }
}
export default Services;
