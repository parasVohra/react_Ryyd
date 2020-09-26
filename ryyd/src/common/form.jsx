import React, { Component } from "react";
import Joi from "@hapi/joi";
import Input from "../common/input";
import Select from "../common/select";
import AutoCompleteCity from "../common/autoComplete";
import Autocomplete from "@material-ui/lab/Autocomplete";
import city from "./cc.json";
import TextField from "@material-ui/core/TextField";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const options = { abortEarly: false };
    const Schema = Joi.object().keys(this.schema);
    const { error } = Schema.validate(this.state.data, options);

    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const Schema = Joi.object().keys(schema);
    const { error } = Schema.validate(obj);

    return error ? error.details[0].message : null;
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderButton = label => {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  };

  renderInput = (name, label, type = "text", readOnly = false) => {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        onChange={this.handleChange}
        label={label}
        readOnly={readOnly}
        error={errors[name]}
      />
    );
  };

  renderSelect = (name, label, options) => {
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

  renderCitySelect = (name, label, error) => {
    const { data, errors } = this.state;
    console.log(data);
    const defaultProps = {
      options: city,
      getOptionLabel: options => options.City,
    };
    return (
      <div>
        <Autocomplete
          {...defaultProps}
          id="clear-on-scape"
          clearOnEscape
          autoSelect
          renderInput={params => (
            <TextField
              {...params}
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password",
              }}
              name={name}
              onChange={this.handleChange}
              label={label}
              error={errors[name]}
              margin="normal"
              value={data[name]}
            />
          )}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    );
  };
}

export default Form;
