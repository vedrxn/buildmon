import React from 'react'
import ReactDOM from 'react-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import FormGroup from 'react-bootstrap/FormGroup'

interface Props {
  onQueryChange: React.ReactEventHandler<HTMLInputElement>
  query: string
}

export default (props: Props) => (
  <div className="d-flex">
    <Form>
      <FormGroup
        className="mb-0 mr-2"
        controlId="sidebar-controls-search-input"
      >
        <FormControl
          aria-label="Search"
          onChange={props.onQueryChange}
          placeholder="Search"
          value={props.query}
        />
      </FormGroup>
    </Form>
    <Button variant="primary">+</Button>
  </div>
)
