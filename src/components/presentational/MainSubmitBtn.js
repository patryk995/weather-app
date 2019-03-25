import React from 'react'
import PropTypes from 'prop-types'
import { Button, InputGroupAddon} from 'reactstrap';

export default function MainSubmitBtn({onSubmit}) {
  return (
    <div>
      <InputGroupAddon addonType="append">
          <Button color='primary' onClick={onSubmit}>Search</Button>
        </InputGroupAddon>
    </div>
  )
}

MainSubmitBtn.propTypes = {
  onSubmit:PropTypes.func.isRequired
}