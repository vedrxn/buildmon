import to from 'await-to-ts'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import FormGroup from 'react-bootstrap/FormGroup'
import Modal from 'react-bootstrap/Modal'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  createCapture,
  createCaptureError
} from '../../common/actions/createCapture'

interface Props {
  dispatch: any
  modalProps: {
    show: boolean
  }
  setIsShowing: any
}

const CreateCaptureModal = (props: Props) => {
  const [name, setName] = useState('')
  const history = useHistory()

  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault()

    const [error, capture] = await to(
      props.dispatch(
        createCapture({
          name
        })
      )
    )

    if (error) {
      props.dispatch(createCaptureError(error))
      return
    }

    history.push(`/captures/${capture.id}`)

    props.setIsShowing(false)
  }

  return (
    <Modal
      aria-labelledby="create-capture-modal"
      backdrop="static"
      centered
      onExited={() => setName('')}
      role="dialog"
      {...props.modalProps}
    >
      <ModalHeader>
        <ModalTitle>Create New Capture</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <FormGroup controlId="create-capture-modal-name">
            <FormControl
              aria-label="Name"
              onChange={(event: React.SyntheticEvent<HTMLInputElement>) =>
                setName(event.currentTarget.value)
              }
              placeholder="Name"
              value={name}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button onClick={() => props.setIsShowing(false)} variant="secondary">
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          Create
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default connect()(CreateCaptureModal)
