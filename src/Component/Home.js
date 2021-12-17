import React from "react";

import Fields from "./Fields/Fields";
import Format from "./Format/Format";
import Input from "./Input/input";
import { Row, Col } from "react-bootstrap";

const Home = ({ files, setField, setFiles, field }) => {
  return (
    <>
      <h5>Import Products</h5>
      <Row>
        <Col xs={12} md={6}>
          <Input files={files} setFiles={setFiles} setField={setField} />
        </Col>
        <Col xs={12} md={6}>
          <Format />
        </Col>

        <Col xs={10}>
          <Fields fields={field} />
        </Col>
      </Row>
    </>
  );
};

export default Home;
