import React, { useEffect, useState } from "react";
import { Container, Row, Col, Breadcrumb, Button } from "react-bootstrap";
import Breadcumb from "../../components/breadcumb/Breadcumb.comp";
import tickets from "../../assets/data/dummy-tickets.json";
import MessageHistory from "../../components/message-history/MessageHistory.comp";
import UpdateTicket from "../../components/update-ticket/UpdateTicket.comp";

const ticket = tickets[0];
const Ticket = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {}, [message]);
  const handleOnChange = (e) => {
    e.preventDefault();
    const { message } = e.target;
    setMessage(message);
  };
  const handleOnSubmit = (e) => {};
  return (
    <Container>
      <Row>
        <Col>
          <Breadcumb page="ticket" />
        </Col>
      </Row>
      <Row>
        <Col className="text-weight-bolder text-secondary">
          <div className="subject">Subject:{ticket.subject}</div>
          <div className="date">IssueDate:{ticket.addedAt}</div>
          <div className="status">Status:{ticket.status}</div>
        </Col>
        <Col className="text-right">
          <Button variant="outline-info">Close Ticket</Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <MessageHistory msg={ticket.history} />
        </Col>
      </Row>
      <hr />
      <Row className="mt-4">
        <Col>
          <UpdateTicket
            message={message}
            handleOnSubmit={handleOnSubmit}
            handleOnChange={handleOnChange}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Ticket;
