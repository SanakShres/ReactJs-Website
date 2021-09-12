import React, { Component } from "react";
import TeamMember from "./TeamMember";

import SectionHead from "./SectionHead";

//images
import img1 from "../assets/img/team/1.jpg";
import img2 from "../assets/img/team/2.jpg";
import img3 from "../assets/img/team/3.jpg";

const members = [
  { image: img1, name: "Parveen Anand", post: "Lead Designer" },
  { image: img2, name: "Diana Petersen", post: "Lead Marketer" },
  { image: img3, name: "Larry Parker", post: "Lead Developer" },
];

class Team extends Component {
  render() {
    return (
      <section className="page-section bg-light" id="team">
        <div className="container">
          <SectionHead
            heading="Our Amazing Team"
            subheading="Lorem ipsum dolor sit amet consectetur."
          />
          <div className="row">
            {members.map((member, index) => {
              return <TeamMember key={index} {...member} />;
            })}
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                eaque, laboriosam veritatis, quos non quis ad perspiciatis,
                totam corporis ea, alias ut unde.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
