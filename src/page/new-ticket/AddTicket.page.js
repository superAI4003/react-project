import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Breadcumb from "../../components/breadcumb/Breadcumb.comp";
import AddTicketForm from "../../components/add-ticket-form/AddTicketForm.comp";
import PropTypes from "prop-types";
import { shortText } from "../../utils/validation";

const initialFrmDt = {
  subject: "",
  issueDate: "",
  detail: "",
};
const initialFrmDtError = {
  subject: false,
  issueDate: false,
  detail: false,
};
const AddTicket = () => {
  const [frmData, setFrmData] = useState(initialFrmDt);
  const [frmDataError, setFrmDataError] = useState(initialFrmDtError);
  useEffect(() => {}, [frmData, frmDataError]);
  const handleOnchange = (e) => {
    const { name, value } = e.target;

    setFrmData({ ...frmData, [name]: value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const isSubjectValid = await shortText(frmData.subject);
    setFrmDataError({ ...initialFrmDtError, subject: !isSubjectValid });
    console.log(frmData);
  };
  return (
    <Container>
      <Row>
        <Col>
          <Breadcumb page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleOnchange={handleOnchange}
            handleOnSubmit={handleOnSubmit}
            frmDt={frmData}
            frmDtError={frmDataError}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AddTicket;
