import React from 'react';
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
import { addEuser } from '../../services/EuserService';
// import Modal from 'react-bootstrap/Modal';

const AddEuserModal = (props) => {

   const handleSubmit = (e) => {
    e.preventDefault();
    addEuser(e.target)
    .then((result)=>{
        alert(result);
        props.setUpdated(true);
    },
    (error)=>{
        alert("Failed To Add Ecom-User");
    })
   } 

  return (
    <div className="container">
        <Modal 
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered        
        >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Fill In Ecom-user Information</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                    <Row>
                        <Col sm={12} centered>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="FirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" name="FirstName" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="LastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" name="LastName" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="MobileNo">
                                    <Form.Label>Mobile No</Form.Label>
                                    <Form.Control type="text" name="MobileNo" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="Email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" name="Email" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="Address">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" name="Address" required placeholder="" />
                            </Form.Group>
                            <Form.Group>
                                <p></p>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" type="submit" onClick={props.onHide}>
                        Close
                </Button>

                </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddEuserModal;
