import React from "react";
import Joi from "@hapi/joi";
import Input from "../common/input";
import Select from "../common/select";

export const validate = () => {
  const options = { abortEarly: false };
  const Schema = Joi.object().keys(this.schema);
  const { error } = Schema.validate(this.state.data, options);

  if (!error) return null;
  const errors = {};
  for (let item of error.details) errors[item.path[0]] = item.message;
  return errors;
};

export const validateProperty = ({ name, value }) => {
  const obj = { [name]: value };
  const schema = { [name]: this.schema[name] };
  const Schema = Joi.object().keys(schema);
  const { error } = Schema.validate(obj);

  return error ? error.details[0].message : null;
};

export const handleSubmit = e => {
  e.preventDefault();
  const errors = this.validate();
  this.setState({ errors: errors || {} });
  if (errors) return;

  this.doSubmit();
};

export const handleChange = ({ currentTarget: input }) => {
  const errors = { ...this.state.errors };
  const errorMessage = this.validateProperty(input);
  if (errorMessage) errors[input.name] = errorMessage;
  else delete errors[input.name];

  const data = { ...this.state.data };
  data[input.name] = input.value;
  this.setState({ data, errors });
};

export const renderButton = label => {
  return (
    <button disabled={this.validate()} className="btn btn-primary">
      {label}
    </button>
  );
};

export const renderInput = (name, label, type = "text") => {
  const { data, errors } = this.state;
  return (
    <Input
      type={type}
      name={name}
      value={data[name]}
      onChange={this.handleChange}
      label={label}
      error={errors[name]}
    />
  );
};

export const renderSelect = (name, label, options) => {
  const { data, errors } = this.state;
  return (
    <Select
      name={name}
      value={data[name]}
      label={label}
      options={options}
      onChange={this.handleChange}
      error={errors[name]}
    />
  );
};

export default {
  renderSelect,
  renderInput,
  renderButton,
  handleChange,
  handleSubmit,
  validateProperty,
  validate,
};
