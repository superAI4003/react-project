import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { PropTypes } from "prop-types";
const AddTicketForm = ({
  handleOnSubmit,
  handleOnchange,
  frmDt,
  frmDtError,
}) => {
  return (
    <div className="custom-jumbotron form-box mt-3 add-new-ticket">
      <h1 className="text-center text-info">Add New Ticket</h1>

      <hr />
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              name="subject"
              max={100}
              value={frmDt.subject}
              onChange={handleOnchange}
              placeholder="Enter Email"
              required
            />
            <Form.Text className="text-danger">
              {frmDtError.subject && "subject is required"}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            issueDate
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              onChange={handleOnchange}
              value={frmDt.issueDate}
              placeholder="Enter Date"
              required
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Details</Form.Label>
          <Form.Control
            as="textarea"
            name="detail"
            rows={5}
            onChange={handleOnchange}
            value={frmDt.detail}
            placeholder="Enter Date"
            required
          />
        </Form.Group>
        <br />
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
};
AddTicketForm.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnchange: PropTypes.func.isRequired,
  frmDt: PropTypes.object.isRequired,
  frmDtError: PropTypes.object.isRequired,
};

export default AddTicketForm;
