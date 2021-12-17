import React from "react";
import { Container, Table } from "react-bootstrap";
import Table_Format from "./Table_Format";
const Display = ({ files }) => {
  return (
    <>
      <Container>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Title</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {files.map((data, index) => {
              return <Table_Format key={index} index={index} data={data} />;
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Display;
