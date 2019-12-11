import to from 'await-to-ts'
import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import FormGroup from 'react-bootstrap/FormGroup'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  createCapture,
  createCaptureError
} from '../../common/actions/createCapture'

interface Props {
  dispatch: any
  onQueryChange: React.ReactEventHandler<HTMLInputElement>
  onQuerySubmit: React.ReactEventHandler<HTMLFormElement>
  query: string
}

const SidebarControls = (props: Props) => {
  const history = useHistory()

  async function handleCreateCaptureClick() {
    const [error, capture] = await to(props.dispatch(createCapture()))

    if (error) {
      props.dispatch(createCaptureError(error))
      return
    }

    history.push(`/captures/${capture.id}`)
  }

  return (
    <div className="d-flex">
      <Form autoComplete="off" onSubmit={props.onQuerySubmit}>
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
      <Button onClick={handleCreateCaptureClick} variant="primary">
        +
      </Button>
    </div>
  )
}

export default connect()(SidebarControls)
