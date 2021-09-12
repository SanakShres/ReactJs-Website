import React, { Component } from "react";

class SectionHead extends Component {
  render() {
    return (
      <div className="text-center">
        <h2 className="section-heading text-uppercase">{this.props.heading}</h2>
        <h3 className="section-subheading text-muted">
          {this.props.subheading}
        </h3>
      </div>
    );
  }
}

export default SectionHead;
