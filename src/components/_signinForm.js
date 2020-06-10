// import { SubmissionError } from "redux-form";
import React from "react";
import { Field, reduxForm } from "redux-form";
import history from "../history";

const SignInForm = (props) => {
  const { handleSubmit } = props;

  if (props.submitSucceeded)
    history.push({
      pathname: "/platform",
      state: { loggedIn: true },
    });
  return (
    <div style={{ width: "400px" }}>
      <form
        style={{ backgroundColor: "transparent" }}
        onSubmit={handleSubmit}
        className="ui form container"
      >
        <div className="field">
          <Field
            name="EmailId"
            component={renderField}
            type="text"
            label="Email Id/Phone Number"
          />
        </div>
        <div className="field">
          <Field
            name="Password"
            component={renderField}
            type="password"
            label="Password"
          />
        </div>
        <button className="ui button" style={{ margin: "0 150px" }}>
          Login
        </button>
      </form>
    </div>
  );
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="field">
    <label>{label}</label>
    <input {...input} placeholder={label} type={type} />
    {touched && error && <span>{error}</span>}
  </div>
);

const validate = (values) => {
  const errors = {};
  if (!values.EmailId) {
    errors.EmailId = "Required";
  } else if (values.EmailId !== "admin") {
    errors.EmailId = "incorrect";
  }
  if (!values.Password) {
    errors.password = "Required";
  } else if (values.Password !== "1234") {
    errors.Password = "Incorrect";
  }
  return errors;
};

export default reduxForm({
  form: "SignInForm",
  validate,
})(SignInForm);
