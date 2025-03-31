import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ConfirmationModelBox({
    show,
    handleClose,
    message,
    onClickFun = ()=>console.log(first)
}) {
    
  return (
    <>
      <Modal 
        show={show} 
        onHide={handleClose}
        backdrop={false}
        >
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <h3>{message}</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{onClickFun(), handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ConfirmationModelBox