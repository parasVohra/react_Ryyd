import React from "react";
import city from "./cc.json";

const onChange = () => {};

const filterLocation = () => {};

const hideList = () => {};

const handleSelect = () => {};

const clearInput = () => {};

const AutoCompleteCity = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select {...rest} name={name} id={name} className="form-control">
        {city.map(City => (
          <option key={City} value={City}>
            {City}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default AutoCompleteCity;
