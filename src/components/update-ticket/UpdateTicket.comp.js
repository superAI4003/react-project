import React from "react";
import { Button, Form } from "react-bootstrap";
const UpdateTicket = ({ message, handleOnChange, handleOnSubmit }) => {
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Label>Reply</Form.Label>
      <br />
      <Form.Text>please replay your mesage fromhere</Form.Text>
      <Form.Control
        as="textarea"
        value={message}
        onChange={handleOnChange}
        row={5}
        name="detail"
      />
      <div className="text-right mt-4">
        <Button variant="info" type="submit">
          Reply
        </Button>
      </div>
    </Form>
  );
};

export default UpdateTicket;
