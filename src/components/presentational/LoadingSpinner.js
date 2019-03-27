import React from 'react'
import {Row} from 'reactstrap';
export default function LoadingSpinner() {
  return (
    <Row className="justify-content-center text-center text-primary">
    <div>
      <div className="spinner-grow my-2" role="status">
        <span className="sr-only">Kraunasi...</span>
      </div>
      <span className="d-block h5 text-primary">Kraunasi...</span>
    </div>
    </Row>
  )
}
