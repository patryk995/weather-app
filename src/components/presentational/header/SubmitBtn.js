import React from "react";
import PropTypes from "prop-types";
import { Button, InputGroupAddon } from "reactstrap";

export default function SubmitBtn({ onSubmit, text, color }) {
  return (
    <InputGroupAddon addonType="append">
      <Button color={color} onClick={onSubmit}>
        {text}
      </Button>
    </InputGroupAddon>
  );
}

SubmitBtn.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
