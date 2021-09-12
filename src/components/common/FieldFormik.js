import React, { Component } from "react";

class FieldFormik extends Component {
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
            onBlur={this.props.onBlur}
          />
        ) : (
          <textarea
            className="form-control"
            id={this.props.name}
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.props.onChange}
            onBlur={this.props.onBlur}
          />
        )}
        {this.props.touched && this.props.errors && (
          <div className="help-block text-danger">{this.props.errors}</div>
        )}
      </div>
    );
  }
}

export default FieldFormik;
