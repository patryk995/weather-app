import React from "react";
import PropTypes from "prop-types";
import {Input} from 'reactstrap';

const MainInput = ({ value, handleChange, onKeyPress }) => (
    <Input
      placeholder="Įveskite miesto pavadinimą..."
      type="text"
      id="mainInput"
      value={value}
      onChange={handleChange}
      onKeyPress={onKeyPress}
      color="primary"
      required
    />
);

MainInput.propTypes = {
  onKeyPress: PropTypes.func.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired
};
export default MainInput;