
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
import { updateEuser } from '../../services/EuserService';



const UpdateEuserModal = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        updateEuser(props.euser.euserId, e.target)
        .then((result)=>{
            alert(result);
            props.setUpdated(true);
        },
        (error)=>{
            alert("Failed to Update Ecom-User");
        })
    };

    return(
        <div className="container">

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update User Information
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={12}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="FirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" name="FirstName" required defaultValue={props.euser.FirstName} placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="LastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" name="LastName" required defaultValue={props.euser.LastName} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="MobileNo">
                                    <Form.Label>MobileNo</Form.Label>
                                    <Form.Control type="text" name="MobileNo" required defaultValue={props.euser.MobileNo} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="Email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" name="Email" required defaultValue={props.euser.Email} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="Address">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" name="Address" required defaultValue={props.euser.Address} placeholder="" />
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
    );
};


export default UpdateEuserModal;