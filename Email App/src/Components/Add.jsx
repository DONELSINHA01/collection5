import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import emailjs from 'emailjs-com';

function Add() {
  const [show, setShow] = useState(false);
  const [emailData, setEmailData] = useState({
    mId: 1,
    types: 'sent',
    senderName: "",
    subject: "",
    content: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('Donel-in-Gmail', 'my-template', e.target, '9A-MJUZi124sRJpgm')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
      })
      .catch((error) => {
        console.error('Email sending failed:', error.text);
      });

    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <i className="fa-solid fa-plus fa-xl" style={{ color: "#ffffff" }}></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="AddForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@Add.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="AddForm.ControlInput1">
              <Form.Label>Sender Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="name"
                onChange={(e) =>
                  setEmailData({
                    ...emailData,
                    senderName: e.target.value,
                  })
                }
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="AddForm.ControlInput1">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="subject.."
                onChange={(e) =>
                  setEmailData({
                    ...emailData,
                    subject: e.target.value,
                  })
                }
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="AddForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) =>
                  setEmailData({
                    ...emailData,
                    content: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Add;
