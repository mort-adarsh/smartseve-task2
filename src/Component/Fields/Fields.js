import React, { useState } from "react";
import Item from "./Item";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const Fields = ({ fields }) => {
  let [selected, setSelected] = useState([]);
  let [Final, SetFinal] = useState(false);
  let history = useHistory();
  let show = () => {
    history.push("/display");
  };
  return (
    <div
      style={{
        alignItems: "center",
        margin: "2em",
        border: "1px solid black",
        padding: "1em",
        boxShadow: "2px 1px 10px grey",
      }}
    >
      <span>Display Handling</span>
      <br /> <br />
      Select the fields to be displayed
      <Row>
        <Col xs={12} md={3}>
          Available Fields
        </Col>
        <Col xs={2}></Col>
        <Col md={3}>Fields to be Displayed</Col>
      </Row>
      <Row>
        <Col md={3} style={{ border: "1px solid grey" }}>
          {fields.map((el, index) => (
            <Item
              key={index}
              item={el.value}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </Col>
        <Col className="m-2 p-5" xs={2}>
          <button onClick={() => SetFinal(true)}>{">>"}</button>
          <br />
          <br />
          <button>{"<<"}</button>
        </Col>
        <Col md={3} style={{ border: "1px solid grey" }}>
          {Final ? (
            <>
              {selected.map((el, index) => (
                <Item
                  key={index}
                  item={el}
                  selected={selected}
                  setSelected={setSelected}
                />
              ))}
            </>
          ) : (
            <></>
          )}
        </Col>
      </Row>
      {Final ? (
        <>
          <Row className="m-2">
            <Col md={8}></Col>
            <Col md={4}>
              <button
                onClick={show}
                style={{
                  backgroundColor: "green",
                  color: "white",
                  fontSize: "500",
                }}
              >
                {" "}
                Next
              </button>
              <span style={{ color: "red", margin: "1em" }}>cancel</span>
            </Col>
          </Row>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Fields;
