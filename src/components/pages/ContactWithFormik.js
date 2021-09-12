import React, { Component } from "react";
import FieldFormik from "../common/FieldFormik";
import SectionHead from "../common/SectionHead";

import { withFormik } from "formik";
import * as Yup from "yup";

const fields = {
  sections: [
    [
      {
        name: "name",
        elementName: "input",
        type: "text",
        placeholder: "Your Name *",
      },
      {
        name: "email",
        elementName: "input",
        type: "email",
        placeholder: "Your Email *",
      },
      {
        name: "phone",
        elementName: "input",
        type: "tel",
        placeholder: "Your Phone *",
      },
    ],
    [
      {
        name: "message",
        elementName: "textarea",
        type: "text",
        placeholder: "Your Message *",
      },
    ],
  ],
};

class ContactWithFormik extends Component {
  render() {
    return (
      <section className="page-section" id="contact">
        <div className="container">
          <SectionHead
            heading="Contact Us Formik"
            subheading="Lorem ipsum dolor sit amet consectetur."
          />
          <form id="contactForm" data-sb-form-api-token="API_TOKEN">
            <div className="row align-items-stretch mb-5">
              {fields.sections.map((section, sectionIndex) => {
                return (
                  <div className="col-md-6" key={sectionIndex}>
                    {section.map((field, index) => {
                      return (
                        <FieldFormik
                          key={index}
                          {...field}
                          value={this.props.values[field.name]}
                          onChange={this.props.handleChange}
                          onBlur={this.props.handleBlur}
                          touched={this.props.touched[field.name]}
                          errors={this.props.errors[field.name]}
                        />
                      );
                    })}
                  </div>
                );
              })}
            </div>
            <div className="d-none" id="submitSuccessMessage">
              <div className="text-center text-white mb-3">
                <div className="fw-bolder">Form submission successful!</div>
                To activate this form, sign up at
                <br />
                <a href="https://startbootstrap.com/solution/contact-forms">
                  https://startbootstrap.com/solution/contact-forms
                </a>
              </div>
            </div>
            <div className="d-none" id="submitErrorMessage">
              <div className="text-center text-danger mb-3">
                Error sending message!
              </div>
            </div>
            <div className="text-center">
              <button
                className="btn btn-primary btn-xl text-uppercase"
                // id="submitButton"
                type="submit"
                onClick={this.props.handleSubmit}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    name: "",
    email: "",
    phone: "",
    message: "",
  }),

  /* Validation With Formik */
  // validate: (values) => {
  //   const errors = {};
  //   // eslint-disable-next-line
  //   Object.keys(values).map((value) => {
  //     console.log(value);
  //     if (!values[value]) {
  //       errors[value] = "The " + value + " field is required";
  //     }
  //   });
  //   return errors;
  // },

  /* Validation With Yup */
  validationSchema: Yup.object().shape({
    name: Yup.string().required("The name field is required"),
    email: Yup.string().email("Email is not valid.").required(),
    phone: Yup.string()
      .min(10, "The phone number must be minimum 10 digits")
      .max(15, "Your phone number is too long")
      .required("The phone number is required"),
    message: Yup.string()
      .max(150, "Your message is too long, it must be specific")
      .required("Message is required"),
  }),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert("The message has been submitted" + JSON.stringify(values, null, 2));
      alert(
        `The message has been submitted ${JSON.stringify(values, null, 2)}`
      );
      setSubmitting(false);
    }, 1000);
  },
})(ContactWithFormik);
