import React, { useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import "../Details Page/Details.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import './Components.css'

const Form = () => {
  const [modal, setmodal] = useState(false);
  return (
    <div>
      <Modal size="lg" isOpen={modal} toggle={() => setmodal(!modal)} >
        <ModalHeader toggle={() => setmodal(!modal)} className="bg-primary text-white">Name</ModalHeader>
        <ModalBody className="bg-dark text-white">
          <form>
            <Row>
              <Col lg={12}>
                <div>
                  <label htmlFor="name" clasName="form-titles">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-inputs"
                    placeholder="Enter your Name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" clasName="form-titles">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    className="form-inputs"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="mail" clasName="form-titles">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-inputs"
                    placeholder="Enter your mail address"
                  />
                </div>
              </Col>
            </Row>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button variant="primary">Book</Button>
        </ModalFooter>
      </Modal>
      <div onClick={() => setmodal(true)}>Book</div>
    </div>
  );
};

export default Form;
