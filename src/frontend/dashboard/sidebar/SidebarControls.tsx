import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import FormGroup from 'react-bootstrap/FormGroup'
import CreateCaptureModal from './CreateCaptureModal'

interface Props {
  onQueryChange: React.ReactEventHandler<HTMLInputElement>
  query: string
}

export default (props: Props) => {
  const [isModalShowing, setIsModalShowing] = useState(false)

  return (
    <div className="d-flex">
      <Form
        autoComplete="off"
        onSubmit={(event: React.SyntheticEvent) => event.preventDefault()}
      >
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
      <Button onClick={() => setIsModalShowing(true)} variant="primary">
        +
      </Button>
      <CreateCaptureModal
        setIsShowing={setIsModalShowing}
        modalProps={{ show: isModalShowing }}
      />
    </div>
  )
}
