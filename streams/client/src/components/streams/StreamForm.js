import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderInput = formProps => {
    const className = `field ${
      formProps.meta.error && formProps.meta.touched ? "error" : ""
    }`;
    return (
      <div className={className}>
        <label>{formProps.label}</label>
        <input {...formProps.input} />
        {this.renderError(formProps.meta)}
      </div>
    ); //line number : 12  -  this syntax takes all the props from formProps and add to input properties
  };

  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };
  renderSubmitButton = () => {
    const { invalid, submitting, pristine } = this.props;
    return (
      <button
        disabled={invalid || submitting || pristine}
        className="ui button primary"
      >
        Submit
      </button>
    );
  };
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        {this.renderSubmitButton()}
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  return errors;
};

export default reduxForm({
  form: "streamForm",
  validate: validate,
})(StreamForm);
