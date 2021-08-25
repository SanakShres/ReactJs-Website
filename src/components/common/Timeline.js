import React, { Component } from "react";
import TimelineList from "./TimelineList";

//images
import img1 from "../assets/img/about/1.jpg";
import img2 from "../assets/img/about/2.jpg";
import img3 from "../assets/img/about/3.jpg";
import img4 from "../assets/img/about/4.jpg";

const listItems = [
  {
    image: img1,
    date: "2009-2011",
    head: "Our Humble Beginnings",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
    inverted: false,
  },
  {
    image: img2,
    date: "March 2011",
    head: "An Agency is Born",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
    inverted: true,
  },
  {
    image: img3,
    date: "December 2015",
    head: "Transition to Full Service",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
    inverted: false,
  },
  {
    image: img4,
    date: "July 2020",
    head: "Phase Two Expansion",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
    inverted: true,
  },
];

class Timeline extends Component {
  render() {
    return (
      <section className="page-section" id="about">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">About</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <ul className="timeline">
            {listItems.map((item, index) => {
              return <TimelineList key={index} {...item} />;
            })}
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>
                  Be Part
                  <br />
                  Of Our
                  <br />
                  Story!
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Timeline;
