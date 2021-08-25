import React, { Component } from "react";

class Field extends Component {
  render() {
    return (
      <div
        className={`form-group${
          this.props.elementName === "textarea" ? " form-group-textarea" : ""
        }`}
      >
        {this.props.elementName === "input" ? (
          <input
            className="form-control"
            id={this.props.name}
            type={this.props.type}
            placeholder={this.props.placeholder}
            data-sb-validations={this.props.validate}
            value={this.props.value}
            onChange={this.props.onChange}
          />
        ) : (
          <textarea
            className="form-control"
            id={this.props.name}
            placeholder={this.props.placeholder}
            data-sb-validations={this.props.validate}
            value={this.props.value}
            onChange={this.props.onChange}
          />
        )}
        <div
          className="invalid-feedback"
          data-sb-feedback={`${this.props.name}:required`}
        >
          The {this.props.name} field is required.
        </div>
        {this.props.type === "email" ? (
          <div className="invalid-feedback" data-sb-feedback="email:email">
            Email is not valid.
          </div>
        ) : null}
      </div>
    );
  }
}

export default Field;
