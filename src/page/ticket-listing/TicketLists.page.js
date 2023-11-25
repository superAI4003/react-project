import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Breadcumb from "../../components/breadcumb/Breadcumb.comp";
import SearchForm from "../../components/search-form/SearchForm.comp";
import TicketTable from "../../components/ticket-table/TicketTable.comp";
import tickets from "../../assets/data/dummy-tickets.json";
import { Link } from "react-router-dom";
const TicketLists = () => {
  const [str, setStr] = useState("");
  const [dispTicks, setDispTicks] = useState(tickets);

  useEffect(() => {}, [str, dispTicks]);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setStr(value);
    searchTicket(value);
  };
  const searchTicket = (sttr) => {
    const displayTicks = tickets.filter((row) =>
      row.subject.toLowerCase().includes(sttr.toLowerCase())
    );
    setDispTicks(displayTicks);
  };
  return (
    <Container>
      <Row>
        <Col>
          <Breadcumb page="Ticket Lists"></Breadcumb>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Link to="/add-ticket">
            <Button variant="info">Add New Ticket</Button>
          </Link>
        </Col>
        <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable tickets={dispTicks} />
        </Col>
      </Row>
    </Container>
  );
};

export default TicketLists;
