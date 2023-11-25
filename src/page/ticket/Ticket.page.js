import React, { useEffect, useState } from "react";
import { Container, Row, Col, Breadcrumb, Button } from "react-bootstrap";
import Breadcumb from "../../components/breadcumb/Breadcumb.comp";
import tickets from "../../assets/data/dummy-tickets.json";
import MessageHistory from "../../components/message-history/MessageHistory.comp";
import UpdateTicket from "../../components/update-ticket/UpdateTicket.comp";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Ticket = () => {
  const { tId } = useParams();
  const [message, setMessage] = useState("");
  const [ticket, setTicket] = useState("");
  useEffect(() => {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i].id == tId) {
        setTicket(tickets[i]);
        continue;
      }
    }
  }, [message, tId]);
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
          <div className="subject">Subject:{ticket.id}</div>

          <div className="subject">Subject:{ticket.subject}</div>
          <div className="date">IssueDate:{ticket.addedAt}</div>
          <div className="status">Status:{ticket.status}</div>
        </Col>
        <Col className="text-right">
          <Button variant="outline-info">Close Ticket</Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>{ticket.history && <MessageHistory msg={ticket.history} />}</Col>
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
