import React from "react";
import { Container, Table } from "react-bootstrap";
import Display_el from "./Dispaly_el";
const Display = ({ files }) => {
  return (
    <>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S.no</th>
              <th>Title</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {files.map((data, index) => {
              return <Display_el key={index} index={index} data={data} />;
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Display;
