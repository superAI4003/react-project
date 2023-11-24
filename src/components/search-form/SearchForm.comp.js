import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { PropTypes } from "prop-types";
const SearchForm = ({ handleOnChange, str }) => {
  return (
    <Form>
      <Form.Group as={Row}>
        <Form.Label column md="2">
          Search{" "}
        </Form.Label>
        <Col md="10">
          <Form.Control
            name="searchStr"
            onChange={handleOnChange}
            value={str}
            placeholder="Search..."
          />
        </Col>
      </Form.Group>
    </Form>
  );
};
SearchForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  str: PropTypes.string.isRequired,
};
export default SearchForm;
